/**
 * Reusable disclaimer rendered directly below any salary / compensation section.
 *
 * Salary figures on this site are informational market benchmarks only — never a
 * promised or guaranteed customer outcome. This component states the data year,
 * that figures vary by experience/specialization/location/employer, and that
 * compensation is not guaranteed. Keep it visually and semantically separate from
 * any service-contact / purchase CTA.
 */

export const SALARY_DISCLAIMER_TEXT =
  'Indicative 2026 market compensation benchmarks based on published industry data. Actual compensation varies by experience, specialization, location, employer and market conditions. These figures are informational and do not represent a guaranteed salary, job offer or employment outcome.';

export default function SalaryDisclaimer({ style }: { style?: React.CSSProperties }) {
  return (
    <p
      role="note"
      aria-label="Salary benchmark disclaimer"
      style={{
        fontSize: '0.8rem',
        lineHeight: 1.65,
        color: 'var(--pts-muted-text, #64748b)',
        fontStyle: 'italic',
        borderTop: '1px solid var(--pts-border, #e2e8f0)',
        paddingTop: '0.7rem',
        marginTop: '1rem',
        ...style,
      }}
    >
      {SALARY_DISCLAIMER_TEXT}
    </p>
  );
}
