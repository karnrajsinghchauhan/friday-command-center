# TOOLS.md

## Deployment

### Hostinger VPS (via MCP)
- MCP package: hostinger-api-mcp (npm, installed locally as fallback)
- Token env var: $HOSTINGER_API_TOKEN
- Set as: export HOSTINGER_API_TOKEN="your-token"
- Token source: hpanel.hostinger.com/api
- Debug mode: set DEBUG=true in env if troubleshooting
- What it can do: manage VPS, check uptime, deploy services, monitor resource usage, manage domains, automate backups
- Agent rule: Always use MCP tools for Hostinger tasks. Never ask user to log into hPanel manually unless MCP fails.
- If MCP fails: tell user in ONE line, suggest re-exporting token
