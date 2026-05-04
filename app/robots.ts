import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-seo';

export const dynamic = 'force-static';

/**
 * Robots rules — explicitly welcoming all legitimate AI crawlers.
 * Structured data + llms.txt + AGENTS.md are the primary machine-readable
 * signals; robots.txt ensures crawlers can reach them.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── Default: all crawlers welcome ───────────────────────────────────
      {
        userAgent: '*',
        allow: '/',
      },
      // ── OpenAI (ChatGPT, GPT-5.x, SearchGPT) ────────────────────────────
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
      },
      // ── Anthropic (Claude) ───────────────────────────────────────────────
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
      },
      // ── Perplexity AI ────────────────────────────────────────────────────
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      // ── Google AI (Gemini, AI Overviews, Google-Extended) ────────────────
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      // ── Microsoft (Bing, Copilot) ────────────────────────────────────────
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
      {
        userAgent: 'msnbot',
        allow: '/',
      },
      // ── Apple (Siri, Spotlight) ──────────────────────────────────────────
      {
        userAgent: 'Applebot',
        allow: '/',
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
      },
      // ── Amazon (Alexa, Amazon AI) ────────────────────────────────────────
      {
        userAgent: 'Amazonbot',
        allow: '/',
      },
      // ── Cohere AI ────────────────────────────────────────────────────────
      {
        userAgent: 'cohere-ai',
        allow: '/',
      },
      // ── Meta (Llama training, Meta AI) ───────────────────────────────────
      {
        userAgent: 'FacebookBot',
        allow: '/',
      },
      {
        userAgent: 'meta-externalagent',
        allow: '/',
      },
      // ── Common Crawl (trains most open-weight LLMs) ──────────────────────
      {
        userAgent: 'CCBot',
        allow: '/',
      },
      // ── Diffbot (knowledge graph, LLM data) ─────────────────────────────
      {
        userAgent: 'Diffbot',
        allow: '/',
      },
      // ── ByteDance / TikTok AI ────────────────────────────────────────────
      {
        userAgent: 'Bytespider',
        allow: '/',
      },
      // ── xAI (Grok) ───────────────────────────────────────────────────────
      {
        userAgent: 'xAI',
        allow: '/',
      },
      // ── You.com ──────────────────────────────────────────────────────────
      {
        userAgent: 'YouBot',
        allow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
