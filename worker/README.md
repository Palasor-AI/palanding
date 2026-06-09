# Palasor Agent Ready Worker

This Worker fronts the existing GitHub Pages site and adds agent discovery behavior that static hosting cannot express by itself.

## Required Cloudflare DNS

Before the route `palasor.com/*` can run, `palasor.com` must be an active Cloudflare zone with the production hostname proxied through Cloudflare.

Create or verify these DNS records:

```text
palasor.com                  CNAME  palasor-ai.github.io    Proxied
www.palasor.com              CNAME  palasor-ai.github.io    Proxied
origin-palasor.palasor.com CNAME palasor-ai.github.io
_index._agents.palasor.com   HTTPS  1 palasor.com alpn="h3,h2" port=443 mandatory="alpn,port"
```

Use DNS-only for `origin-palasor.palasor.com`. The apex record must be proxied so Cloudflare can route `palasor.com/*` to the Worker; the Worker fetches GitHub Pages through `origin-palasor.palasor.com`.

After Cloudflare assigns authoritative nameservers, update the domain at the registrar. Then enable DNSSEC in Cloudflare and publish the DS record at the registrar.

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
curl -i https://palasor.com/.well-known/agent-skills/palasor-public-landing/SKILL.md
curl -i https://palasor.com/.well-known/mcp/server-card.json
curl -i https://palasor.com/.well-known/mcp.json
dig +short HTTPS _index._agents.palasor.com
dig +short DS palasor.com
```
