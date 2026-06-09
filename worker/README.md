# Palasor Agent Ready Worker

This Worker fronts the existing GitHub Pages site and adds agent discovery behavior that static hosting cannot express by itself.

## Required Cloudflare DNS

Before deploying the route `palasor.com/*`, create this DNS-only origin record in the `palasor.com` zone:

```text
origin-palasor.palasor.com CNAME palasor-ai.github.io
```

The Worker fetches `https://palasor.com/...` with `resolveOverride` set to `origin-palasor.palasor.com`. This keeps the `Host` header as `palasor.com` for GitHub Pages while avoiding a Worker self-fetch loop after the zone is proxied through Cloudflare.

## Commands

```bash
npm install
npm run dev
npm run check
npm run deploy
```

## Verification

```bash
curl -i https://palasor.com/robots.txt
curl -i https://palasor.com/sitemap.xml
curl -i -H 'Accept: text/markdown' https://palasor.com/
curl -I https://palasor.com/
curl -i https://palasor.com/.well-known/agent-skills/index.json
curl -i https://palasor.com/.well-known/mcp/server-card.json
```
