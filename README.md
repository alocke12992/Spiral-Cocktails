[Link to deployed project](https://spiral-cocktails-khu8y6a0l-alocke12992.vercel.app/)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## TODO:

### Project Wide
- Loading components
- More robust Theme (colors, breakpoints, etc.)
- Convert all to css modules - allow more SSR, since it seems styled components requires client render OR get styled-components SSR working
- Handle missing values / Normalize data after fetch

### Home View
- Retain search after navigating (Context)
- Abort controller on search input
- Placeholder when there are no drinks found

### Drink view
- Write tests for unit conversions


## Questions
- Px vs rem
- Should the whole drink card be clickable

## Tradeoffs / Takeaways
- 'use client' vs SSR -> Where possible, attempted to use SSR (e.g. drinks/[drink]) to prevent having to load on the client. Tradeoff -> Home view required client side b/c user input on search required to fetch data

- Choice to use Styled-components -> After realizing NextJs doesn't support SC SSR out of the box, should have gone with css-modules (learned NextJS comes with built in support)

- Would like to learn more about how NextJS handles caching -> I.e. Cache single drink view so we don't have to look up every time.

- Got a bit "hacky" when trying to support "shots" and "parts". Could use a cleaner system/approach. Hard b/c there wasn't a standard API to follow to know what different variations we would get back from the API
