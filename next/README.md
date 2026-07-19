Checkout [full next.js website documentation](https://siteplay.ai/docs/frameworks/next)

## <img width="20" height="20" alt="siteplay.ai logo" src="https://avatars.githubusercontent.com/u/229278305?s=48&v=4" /> Next.js Siteplay.ai Project

This is an exported Next.js project built for users who want production-grade performance, SEO-friendly rendering, and a scalable React architecture using the App Router. 

The project uses:

* **Next.js App Router** for layouts, routes, and page rendering.
* **React + TypeScript** for generated components.
* **Tailwind CSS v4** for styling.
* **Shadcn** for interactive UI elements.
* **SVG files & Lucide React** for icons.
* **Motion** for generated animations.
* **next-themes** for light and dark mode support.

## Run the Project Locally

### 1. Install Dependencies

#### npm

```bash id="jlwmw5"
npm install
```

#### pnpm

```bash id="wutg5m"
pnpm i
```

#### Yarn

```bash id="3ll5ik"
yarn
```

---

### 2. Run the Development Server

#### npm

```bash id="lc4d7d"
npm run dev
```

#### pnpm

```bash id="gj6i5t"
pnpm dev
```

#### Yarn

```bash id="47jlwm"
yarn dev
```

---

### 3. Build for Production

#### npm

```bash id="8i6rjv"
npm run build
```

#### pnpm

```bash id="omf2j3"
pnpm build
```

#### Yarn

```bash id="pdnzhz"
yarn build
```

---

### 4. Preview the Production Build

#### npm

```bash id="0svm1k"
npm run serve
```

#### pnpm

```bash id="0nngf2"
pnpm serve
```

#### Yarn

```bash id="vq2h92"
yarn serve
```

Make sure you have [serve](https://www.npmjs.com/package/serve) package installed globally. `pnpm add -g serve`

## Styling with Tailwind CSS

**Files:** `src/app/global.css` and `src/app/theme.css`

Siteplay.ai generates Tailwind CSS v4 based components. Most visual changes can be made directly inside the generated page and section React components.

Start with these areas:

* `src/components/sections` for section-level layout and spacing.
* `src/components/common` for shared element styling.
* `tailwind.config.ts` for project-wide Tailwind configuration.
* `src/app/global.css` and `src/app/theme.css` for global styles and design tokens.

## SEO Metadata

**File:** `src/app/*/page.tsx`

Siteplay.ai exports SEO settings into Next.js metadata.

```ts id="g88t8q"
const page = {
  seo: {
    title: 'About Us Page',
    description: 'lorem ipsum dolor sit...',
  },
} as Page;
```

After export, review:

* Page titles and descriptions
* Open Graph metadata
* Canonical URLs
* `public/robots.txt`

# Deployment

The exported Next.js project can be deployed anywhere that supports Next.js.

Supported platforms include:

* Vercel
* Netlify
* Cloudflare
* AWS
* Node.js hosting providers

Before deploying:

* Run `npm run build`
* Configure environment variables
* Review SEO metadata and production URLs
* Test forms and links
* Verify light and dark mode behavior

## More Resources

* [Astro + React Documentation](https://siteplay.ai/docs/frameworks/astro-react)
* [Astro + Vue Documentation](https://siteplay.ai/docs/frameworks/astro-vue)
* [Nuxt Documentation](https://siteplay.ai/docs/frameworks/nuxt)
* [React Documentation](https://siteplay.ai/docs/frameworks/react)
* [Vue Documentation](https://siteplay.ai/docs/frameworks/vue)
* [Website templates](https://siteplay.ai/templates)
