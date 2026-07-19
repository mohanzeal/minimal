Checkout [full react website documentation](https://siteplay.ai/docs/frameworks/react)

## <img width="20" height="20" alt="siteplay.ai logo" src="https://avatars.githubusercontent.com/u/229278305?s=48&v=4" /> React Siteplay.ai Project

This is an exported React project built with Vite for users who want a lightweight SPA architecture with fast development tooling and flexible client-side routing. 

The project uses:

* **React + TypeScript** for generated pages and components.
* **Vite** for local development, HMR, and production builds.
* **React Router** for page routing.
* **Tailwind CSS v4** for styling.
* **Shadcn-style React primitives** for interactive UI elements.
* **SVG files and Lucide React** for icons.
* **Motion** for generated animations.
* **React Helmet Async** for page metadata.

## Run the Project Locally

### 1. Install Dependencies

#### npm

```bash id="qs6qv4"
npm install
```

#### pnpm

```bash id="4jddgk"
pnpm i
```

#### Yarn

```bash id="6gkz7t"
yarn
```

---

### 2. Run the Development Server

#### npm

```bash id="7f7kqs"
npm run dev
```

#### pnpm

```bash id="p0qdyx"
pnpm dev
```

#### Yarn

```bash id="ybjlwm"
yarn dev
```

---

### 3. Build for Production

#### npm

```bash id="t2y04s"
npm run build
```

#### pnpm

```bash id="d1duut"
pnpm build
```

#### Yarn

```bash id="wjl7vg"
yarn build
```

---

### 4. Preview the Production Build

#### npm

```bash id="jlwmk3"
npm run preview
```

#### pnpm

```bash id="ml20ys"
pnpm preview
```

#### Yarn

```bash id="f7m0mq"
yarn preview
```

## Styling with Tailwind CSS

**Files:** `src/style.css` and `src/theme.css`

Siteplay.ai generates Tailwind CSS v4 based components. Most visual changes can be made directly inside the generated React page and section components.

Start with these areas:

* `src/components/sections` for section-level layout and spacing.
* `src/components/common` for shared element styling.
* `tailwind.config.ts` for project-wide Tailwind configuration.
* `src/style.css` for global styles.
* `src/theme.css` for design tokens and CSS variables.

## SEO Metadata

**Files:** `src/layouts/FullPageLayout.tsx` and `src/pages/*.tsx`

Siteplay.ai exports SEO settings through React Helmet Async.

```tsx id="kt3f3d"
const page = {
  seo: {
    title: "About Us Page",
    description: "lorem ipsum dolor sit...",
  },
} as Page;
```

After export, review:

* Page titles and descriptions
* Open Graph metadata
* Canonical URLs
* `public/robots.txt`

# Deployment

The exported React project produces a static Vite build that can be deployed to:

* Vercel
* Netlify
* Cloudflare Pages
* GitHub Pages
* AWS S3
* Any static hosting provider

Before deploying:

* Run `npm run build`
* Configure environment variables
* Review SEO metadata and production URLs
* Test forms and links
* Verify light and dark mode behavior

## More Resources

* [Astro + React Documentation](https://siteplay.ai/docs/frameworks/astro-react)
* [Astro + Vue Documentation](https://siteplay.ai/docs/frameworks/astro-vue)
* [Next.js Documentation](https://siteplay.ai/docs/frameworks/next)
* [Nuxt Documentation](https://siteplay.ai/docs/frameworks/nuxt)
* [Vue Documentation](https://siteplay.ai/docs/frameworks/vue)
* [Website templates](https://siteplay.ai/templates)
