## Reddit Game starter (Blocks)

This is a starter project to build a Reddit Game using their proprietary framework Devvit.js that can be deployed from your machine to the internal hosting on Reddit.

It's important to mention that Devvit has two different types of projects: **Blocks** and **Web**.

The main differences between Devvit Blocks and Devvit Web are:

**Devvit Blocks:**
- Uses Reddit’s native design system and components, optimized for speed and ease of use.
- Apps run interactively in-feed (i.e., directly inside Reddit posts).
- Cross-platform: works on iOS, Android, and Web with a single codebase.
- Limited to Reddit’s UI elements (no custom HTML/CSS/JS).
- Not recommended for games due to technical constraints (no sounds, 3D graphics, or advanced animations).
- Limited animation support (only animated GIFs).
- Cannot run in full screen or focus mode.
- Ideal for simple, fast, and native-feeling Reddit experiences.
- Example use cases: live scoreboards, polls, word games, and interactive posts that need to blend into Reddit’s UI.
- Can be used together with Devvit Web for hybrid experiences (e.g., preview in Blocks, launch full experience in Web) [Blocks Overview](https://developers.reddit.com/docs/capabilities/blocks/overview).

**Devvit Web:**
- Lets you build apps using standard web technologies (React, Three.js, Phaser, etc.).
- Supports full screen and focus mode experiences (modal or dedicated view).
- Not interactive in-feed; typically launched from a button or link in a Blocks post.
- Supports custom HTML, CSS, and JS, enabling advanced features like sounds, 3D graphics, and complex animations.
- Follows a traditional client/server split, with clear separation between frontend and backend code.
- More flexible for building games, rich visualizations, and complex web apps.
- Not limited to Reddit’s design system—developers have full control over UI and UX.
- Example use cases: games, 3D visualizations, and apps requiring advanced interactivity or custom design [Devvit Web Overview](https://developers.reddit.com/docs/capabilities/devvit-web/devvit_web_overview).

**Summary Table:**

| Feature                          | Devvit Blocks | Devvit Web |
|----------------------------------|:-------------:|:----------:|
| Interactive In-feed              | ✅            | ❌          |
| Reddit Design System             | ✅            | ❌          |
| Cross-platform (iOS/Android/Web) | ✅            | ✅          |
| Full Screen / Focus Mode         | ❌            | ✅          |
| Sounds                           | ❌            | ✅          |
| 3D Graphics                      | ❌            | ✅          |
| Animations                       | Limited       | ✅          |
| Standard Web Stack               | ❌            | ✅          |

You can also combine both: use Blocks for in-feed previews and Web for full experiences [Blocks vs. Web](https://developers.reddit.com/docs/capabilities/blocks/overview).

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
