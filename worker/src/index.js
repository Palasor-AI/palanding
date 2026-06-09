const BASE_URL = "https://palasor.com";
const APP_STORE_URL = "https://apps.apple.com/us/app/palasor/id6743174968";
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=it.redrop.app";

const ROBOTS_TXT = `User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

Content-Signal: ai-train=yes, search=yes, ai-input=yes

Sitemap: ${BASE_URL}/sitemap.xml
`;

const SITEMAP_XML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>2026-06-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="it" href="${BASE_URL}/" />
    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}/en/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/" />
  </url>
  <url>
    <loc>${BASE_URL}/en/</loc>
    <lastmod>2026-06-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="it" href="${BASE_URL}/" />
    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}/en/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/" />
  </url>
  <url>
    <loc>${BASE_URL}/privacy/</loc>
    <lastmod>2026-06-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${BASE_URL}/cookie/</loc>
    <lastmod>2026-06-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.4</priority>
  </url>
  <url>
    <loc>${BASE_URL}/terms-conditions/</loc>
    <lastmod>2026-06-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
    <xhtml:link rel="alternate" hreflang="it" href="${BASE_URL}/terms-conditions/" />
    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}/en/terms-conditions/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/terms-conditions/" />
  </url>
  <url>
    <loc>${BASE_URL}/en/terms-conditions/</loc>
    <lastmod>2026-06-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.4</priority>
    <xhtml:link rel="alternate" hreflang="it" href="${BASE_URL}/terms-conditions/" />
    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}/en/terms-conditions/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/terms-conditions/" />
  </url>
</urlset>
`;

const INDEX_MD = `# Palasor

Palasor e una app per tenere viva la vita sociale: organizza serate con gli amici, trova connessioni reali vicino a te e aiuta a mantenere attive le relazioni.

## Cosa fa

- Tiene l'utente aggiornato su amici, disponibilita e opportunita vicine.
- Permette al Palasor dell'utente di coordinarsi con i Palasor degli amici.
- Suggerisce connessioni reali entro 15 km.

## Link principali

- Homepage italiana: ${BASE_URL}/
- Homepage inglese: ${BASE_URL}/en/
- App Store: ${APP_STORE_URL}
- Google Play: ${GOOGLE_PLAY_URL}
- Privacy Policy: ${BASE_URL}/privacy/
- Cookie Policy: ${BASE_URL}/cookie/
- Termini e Condizioni: ${BASE_URL}/terms-conditions/

## Agent notes

Questa e una landing page pubblica. Non sono pubblicate API pubbliche, OAuth discovery o endpoint autenticati per agenti in questa versione.
`;

const EN_INDEX_MD = `# Palasor

Palasor is an app for keeping social life active: it plans nights out with friends, finds real connections nearby, and helps relationships stay alive.

## What it does

- Keeps the user updated on friends, availability, and nearby opportunities.
- Lets the user's Palasor coordinate with friends' Palasors.
- Suggests real connections within 15 km.

## Key links

- Italian homepage: ${BASE_URL}/
- English homepage: ${BASE_URL}/en/
- App Store: ${APP_STORE_URL}
- Google Play: ${GOOGLE_PLAY_URL}
- Privacy Policy: ${BASE_URL}/privacy/
- Cookie Policy: ${BASE_URL}/cookie/
- Terms and Conditions: ${BASE_URL}/en/terms-conditions/

## Agent notes

This is a public landing page. No public APIs, OAuth discovery, or authenticated agent endpoints are published in this version.
`;

const PALASOR_PUBLIC_SKILL_MD = `---
name: palasor-public-landing
description: Use Palasor's public landing page to understand the app and open unauthenticated app download, legal, and summary links.
---

# Palasor Public Landing

Use this skill when an agent needs to understand or navigate Palasor's public, unauthenticated landing page.

## Purpose

Palasor helps people keep their social life active by planning nights out with friends, finding real connections nearby, and keeping relationships alive.

## Public Actions

- Open the Italian landing page: ${BASE_URL}/
- Open the English landing page: ${BASE_URL}/en/
- Open the App Store listing: ${APP_STORE_URL}
- Open the Google Play listing: ${GOOGLE_PLAY_URL}
- Read the Italian markdown summary: ${BASE_URL}/index.md
- Read the English markdown summary: ${BASE_URL}/en/index.md
- Read the Privacy Policy: ${BASE_URL}/privacy/
- Read the Cookie Policy: ${BASE_URL}/cookie/
- Read the Terms and Conditions: ${BASE_URL}/terms-conditions/

## Boundaries

This skill is informational only. It does not expose authenticated actions, account access, private user data, API calls, OAuth flows, payments, commerce operations, MCP transports, or A2A services.
`;

const AGENT_SKILLS_INDEX = {
  "$schema": "https://schemas.agentskills.io/discovery/0.2.0/schema.json",
  skills: [
    {
      name: "palasor-public-landing",
      type: "skill-md",
      description: "Use Palasor's public landing page to understand the app and open unauthenticated app download, legal, and summary links.",
      url: `${BASE_URL}/.well-known/agent-skills/palasor-public-landing/SKILL.md`,
      digest: "sha256:ca5a53d5561e1acbf55a5599cd32e8fe45247a10c3ef1c6e9d149272477155d6"
    }
  ]
};

const MCP_SERVER_CARD = {
  "$schema": "https://modelcontextprotocol.io/schemas/server-card.json",
  serverInfo: {
    name: "Palasor Landing Public Discovery",
    version: "1.0.0"
  },
  description: "Informational discovery card for Palasor's public landing page. No remote MCP transport or authenticated tools are exposed in this version.",
  transport: {
    type: "none",
    endpoint: `${BASE_URL}/`,
    description: "No MCP server transport is available for this landing-only release."
  },
  capabilities: {
    tools: false,
    resources: [
      {
        name: "Italian landing summary",
        uri: `${BASE_URL}/index.md`,
        mimeType: "text/markdown"
      },
      {
        name: "English landing summary",
        uri: `${BASE_URL}/en/index.md`,
        mimeType: "text/markdown"
      },
      {
        name: "Sitemap",
        uri: `${BASE_URL}/sitemap.xml`,
        mimeType: "application/xml"
      }
    ]
  },
  contact: {
    email: "hello@palasor.com"
  }
};

const MCP_SERVER_CARDS = {
  "$schema": "https://modelcontextprotocol.io/schemas/server-cards.json",
  servers: [
    {
      url: `${BASE_URL}/.well-known/mcp/server-card.json`,
      name: "Palasor Landing Public Discovery",
      description: "Informational discovery card for Palasor's public landing page."
    }
  ]
};

const HOME_LINKS = [
  `</sitemap.xml>; rel="sitemap"; type="application/xml"`,
  `</index.md>; rel="alternate"; type="text/markdown"; hreflang="it"`,
  `</en/index.md>; rel="alternate"; type="text/markdown"; hreflang="en"`,
  `</.well-known/agent-skills/index.json>; rel="agent-skills"; type="application/json"`,
  `</.well-known/mcp/server-card.json>; rel="service-desc"; type="application/json"`
];

export default {
  async fetch(request, env = {}) {
    const url = new URL(request.url);

    if (request.method === "GET" || request.method === "HEAD") {
      const staticResponse = getStaticResponse(url.pathname, request.method);
      if (staticResponse) {
        return staticResponse;
      }

      if (wantsMarkdown(request) && isLandingPath(url.pathname)) {
        return markdownResponse(isEnglishPath(url.pathname) ? EN_INDEX_MD : INDEX_MD, request.method);
      }
    }

    const originResponse = await fetchOrigin(request, env);
    return addDiscoveryHeaders(originResponse, request);
  }
};

function getStaticResponse(pathname, method) {
  const normalizedPath = normalizePath(pathname);

  switch (normalizedPath) {
    case "/robots.txt":
      return textResponse(ROBOTS_TXT, "text/plain; charset=utf-8", method);
    case "/sitemap.xml":
      return textResponse(SITEMAP_XML, "application/xml; charset=utf-8", method);
    case "/index.md":
      return markdownResponse(INDEX_MD, method);
    case "/en/index.md":
      return markdownResponse(EN_INDEX_MD, method);
    case "/.well-known/agent-skills/index.json":
      return jsonResponse(AGENT_SKILLS_INDEX, method);
    case "/.well-known/agent-skills/palasor-public-landing/SKILL.md":
      return markdownResponse(PALASOR_PUBLIC_SKILL_MD, method);
    case "/.well-known/mcp/server-card.json":
    case "/.well-known/mcp.json":
      return jsonResponse(MCP_SERVER_CARD, method);
    case "/.well-known/mcp/server-cards.json":
      return jsonResponse(MCP_SERVER_CARDS, method);
    default:
      return null;
  }
}

function normalizePath(pathname) {
  return pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

function isLandingPath(pathname) {
  return pathname === "/" || pathname === "/index.html" || pathname === "/en/" || pathname === "/en/index.html";
}

function isEnglishPath(pathname) {
  return pathname === "/en/" || pathname === "/en/index.html";
}

function wantsMarkdown(request) {
  const accept = request.headers.get("Accept") || "";
  return accept.split(",").some((part) => part.trim().toLowerCase().startsWith("text/markdown"));
}

async function fetchOrigin(request, env) {
  const requestUrl = new URL(request.url);
  const originHostname = env.ORIGIN_HOSTNAME || requestUrl.hostname;
  requestUrl.protocol = "https:";
  requestUrl.hostname = originHostname;

  const originRequest = new Request(requestUrl, request);
  const resolveOverride = env.ORIGIN_RESOLVE_OVERRIDE;
  const init = resolveOverride ? { cf: { resolveOverride } } : undefined;

  return await fetch(originRequest, init);
}

function addDiscoveryHeaders(response, request) {
  if (!isLandingPath(new URL(request.url).pathname)) {
    return response;
  }

  const headers = new Headers(response.headers);
  appendHeader(headers, "Link", HOME_LINKS.join(", "));
  appendHeader(headers, "Vary", "Accept");

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}

function textResponse(body, contentType, method) {
  return new Response(method === "HEAD" ? null : body, {
    status: 200,
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=600",
      "Access-Control-Allow-Origin": "*"
    }
  });
}

function markdownResponse(body, method) {
  return new Response(method === "HEAD" ? null : body, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=600",
      "Access-Control-Allow-Origin": "*",
      "Vary": "Accept",
      "X-Markdown-Tokens": String(Math.ceil(body.length / 4))
    }
  });
}

function jsonResponse(value, method) {
  return new Response(method === "HEAD" ? null : JSON.stringify(value, null, 2) + "\n", {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=600",
      "Access-Control-Allow-Origin": "*"
    }
  });
}

function appendHeader(headers, name, value) {
  const currentValue = headers.get(name);
  headers.set(name, currentValue ? `${currentValue}, ${value}` : value);
}
