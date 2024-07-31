## Getting Started

First, run the development server:

```bash
# If you are running wsl, set this environment variable:
export WATCHPACK_POLLING=true

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Making it yours

Update all your trip information in `trips.ts`

For each trip you create there, create a file in `pages/trips/[trip_key].mdx` where `[trip_key]` is the key you created for that trip in `trips.ts`

Update the `pages/about.mdx` with information about yourself!

Feel free to update the colors and styles in `styles/global.css`

When in doubt, use the already populated content as an example!