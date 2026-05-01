import type { ReactNode } from 'react';
import styles from './RagArticle.module.css';

const PYTHON_KW = new Set(
  'False None True and as assert async await break class continue def del elif else except finally for from global if import in is lambda nonlocal not or pass raise return try while with yield'.split(
    ' ',
  ),
);

function highlightPythonLine(line: string): ReactNode {
  const out: ReactNode[] = [];
  let i = 0;
  let k = 0;

  while (i < line.length) {
    const ch = line[i];

    if (ch === ' ' || ch === '\t') {
      let j = i;
      while (j < line.length && (line[j] === ' ' || line[j] === '\t')) j++;
      out.push(<span key={k++}>{line.slice(i, j)}</span>);
      i = j;
      continue;
    }

    if (ch === '#') {
      out.push(<span key={k++} className={styles.tokComm}>{line.slice(i)}</span>);
      break;
    }

    if (ch === '"' || ch === "'") {
      const quote = ch;
      let j = i + 1;
      while (j < line.length) {
        if (line[j] === '\\') {
          j += 2;
          continue;
        }
        if (line[j] === quote) {
          j++;
          break;
        }
        j++;
      }
      out.push(<span key={k++} className={styles.tokStr}>{line.slice(i, j)}</span>);
      i = j;
      continue;
    }

    if (/[a-zA-Z_]/.test(ch)) {
      let j = i;
      while (j < line.length && /[a-zA-Z0-9_]/.test(line[j])) j++;
      const word = line.slice(i, j);
      let cls: string | undefined;
      if (PYTHON_KW.has(word)) cls = styles.tokKw;
      else if (/^\d+$/.test(word) || (word.includes('.') && /^\d[\d.]*$/.test(word))) cls = styles.tokNum;
      out.push(
        <span key={k++} className={cls}>
          {word}
        </span>,
      );
      i = j;
      continue;
    }

    if (/[0-9]/.test(ch)) {
      let j = i;
      while (j < line.length && /[0-9.]/.test(line[j])) j++;
      out.push(<span key={k++} className={styles.tokNum}>{line.slice(i, j)}</span>);
      i = j;
      continue;
    }

    out.push(<span key={k++}>{ch}</span>);
    i++;
  }

  return <>{out}</>;
}

function highlightBrackets(segment: string): ReactNode {
  const parts: ReactNode[] = [];
  const re = /(\[[^\]]*\])/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let idx = 0;
  while ((m = re.exec(segment)) !== null) {
    if (m.index > last) {
      parts.push(<span key={`p-${idx++}`}>{segment.slice(last, m.index)}</span>);
    }
    parts.push(
      <span key={`b-${idx++}`} className={styles.tokDiagBox}>
        {m[1]}
      </span>,
    );
    last = m.index + m[0].length;
  }
  if (last < segment.length) {
    parts.push(<span key={`p-${idx++}`}>{segment.slice(last)}</span>);
  }
  return parts.length ? <>{parts}</> : segment;
}

function highlightTextLine(line: string): ReactNode {
  const trimmed = line.trimStart();
  if (trimmed.startsWith('//')) {
    return <span className={styles.tokComm}>{line}</span>;
  }

  const pieces = line.split(/(↓|→)/);
  return (
    <>
      {pieces.map((piece, i) => {
        if (piece === '↓' || piece === '→') {
          return (
            <span key={i} className={styles.tokArrow}>
              {piece}
            </span>
          );
        }
        return <span key={i}>{highlightBrackets(piece)}</span>;
      })}
    </>
  );
}

type Lang = 'python' | 'text';

/** Stack Overflow–style: one panel, uniform background, token colors only (no zebra / gutter stripes). */
export function RagCodeBlock({
  children,
  language = 'text',
  filename,
}: {
  children: string;
  language?: Lang;
  filename?: string;
}) {
  const lines = children.replace(/\n$/, '').split('\n');
  const title = filename ?? (language === 'python' ? 'snippet.py' : 'pipeline.txt');
  const langLabel = language === 'python' ? 'Python' : 'Text';

  return (
    <div className={styles.soBlock}>
      <div className={styles.soHeader}>
        <span className={styles.soFilename}>{title}</span>
        <span className={styles.soLang}>{langLabel}</span>
      </div>
      <div className={styles.soBody}>
        {lines.map((line, idx) => (
          <div key={idx} className={styles.soRow}>
            <span className={styles.soLn} aria-hidden>
              {idx + 1}
            </span>
            <code className={styles.soCode}>
              {language === 'python' ? highlightPythonLine(line) : highlightTextLine(line)}
            </code>
          </div>
        ))}
      </div>
    </div>
  );
}
