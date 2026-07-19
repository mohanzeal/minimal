 Checkout [full vue website documentation](https://siteplay.ai/docs/frameworks/vue)

## <img width="20" height="20" alt="siteplay.ai logo" src="https://avatars.githubusercontent.com/u/229278305?s=48&v=4" /> Vue Siteplay.ai Project

This is an exported Vue 3 project built with Vite for users who want a modern SFC-based architecture with fast development tooling and flexible client-side routing. 

The project uses:

* **Vue + TypeScript** for generated pages and components.
* **Vite** for local development, HMR, and production builds.
* **Vue Router** for page routing.
* **Tailwind CSS v4** for styling.
* **Shadcn-style Vue primitives** for interactive UI elements.
* **SVG files, Iconify, and Lucide Vue** for icons.
* **Motion Vue** for generated animations.
* **Unhead** for page metadata.
* **VueUse color mode** for light and dark mode support.

## Run the Project Locally

### 1. Install Dependencies

#### npm

```bash id="f0nxwb"
npm install
```

#### pnpm

```bash id="9t6rmt"
pnpm i
```

#### Yarn

```bash id="nqijy2"
yarn
```

---

### 2. Run the Development Server

#### npm

```bash id="49ebm6"
npm run dev
```

#### pnpm

```bash id="jlwm1u"
pnpm dev
```

#### Yarn

```bash id="r0pwq2"
yarn dev
```

---

### 3. Build for Production

#### npm

```bash id="jlwmx4"
npm run build
```

#### pnpm

```bash id="3uqlvh"
pnpm build
```

#### Yarn

```bash id="9v2tr0"
yarn build
```

---

### 4. Preview the Production Build

#### npm

```bash id="dgqep8"
npm run preview
```

#### pnpm

```bash id="jlwm8m"
pnpm preview
```

#### Yarn

```bash id="7r84c5"
yarn preview
```

## Styling with Tailwind CSS

**Files:** `src/style.css` and `src/theme.css`

Siteplay.ai generates Tailwind CSS v4 based components. Most visual changes can be made directly inside the generated Vue page and section components.

Start with these areas:

* `src/components/sections` for section-level layout and spacing.
* `src/components/common` for shared element styling.
* `tailwind.config.ts` for project-wide Tailwind configuration.
* `src/style.css` for global styles.
* `src/theme.css` for design tokens and CSS variables.

## SEO Metadata

**Files:** `src/layouts/FullPageLayout.vue` and `src/pages/*.vue`

Siteplay.ai exports SEO settings through Unhead.

```ts id="f0yfrn"
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

The exported Vue project produces a static Vite build that can be deployed to:

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

---

## More Resources

* [Astro + React Documentation](https://siteplay.ai/docs/frameworks/astro-react)
* [Astro + Vue Documentation](https://siteplay.ai/docs/frameworks/astro-vue)
* [Next.js Documentation](https://siteplay.ai/docs/frameworks/next)
* [Nuxt Documentation](https://siteplay.ai/docs/frameworks/nuxt)
* [React Documentation](https://siteplay.ai/docs/frameworks/react)
* [Website templates](https://siteplay.ai/templates)

