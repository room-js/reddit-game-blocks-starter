## Reddit Game starter (Blocks)

This is a starter project to build a Reddit Game using their proprietary framework Devvit.js that can be deployed from your machine to the internal hosting on Reddit.

## Stack

- TypeScript
- Devvit.js (Reddit framework)
- PNPM package manager
- Biome.js (linter)

## How to start

1. Log in to Reddit in CLI: `pnpm run login`
2. Initialize the project on Reddit: `npx devvit init`
3. Start project preview: `pnpm run dev`

## Deployment

1. Upload the project to Reddit: `pnpm run deploy`
2. Publish it: `pnpm run publish`

## Commands

- `pnpm run lint` - linter + formatter
- `pnpm run type-check` - TypeScript check
- `pnpm run logs -- <subreddit-name>` - check logs, might be helpful for debugging purposes
