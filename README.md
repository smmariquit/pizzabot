# Pizzabot

Discord bot for Pizza & Friends (joinpizza.fun)

## Setup

1. Copy `.env.example` → `.env` and fill Discord app credentials.
2. `bun install`
3. `bun run register-commands` (set `DISCORD_GUILD_ID` for dev guild registration)
4. `bun run dev`

## Scripts

| Command | Action |
| ------- | ------ |
| `bun run dev` | Watch mode |
| `bun run register-commands` | Register slash commands |
| `bun run build` | Compile to `dist/` |
| `bun run check` | Lint, typecheck, test, build |

## Commands

| Command | Description |
| ------- | ----------- |
| `/ping` | Latency check |
| `/pizza` | Links and info for Pizza & Friends |

Roadmap: [docs/ROADMAP.md](docs/ROADMAP.md).

## Legal

- [Privacy Policy](docs/PRIVACY.md)
- [Terms of Service](docs/TERMS.md)
- Pizza & Friends site: [joinpizza.fun/privacy](https://joinpizza.fun/privacy)
- UPLB Tools org policy (when live): [uplbtools.me/privacy](https://uplbtools.me/privacy)

## License

MIT: see [LICENSE](LICENSE).
