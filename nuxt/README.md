Checkout [full nuxt website documentation](https://siteplay.ai/docs/frameworks/nuxt)

## <img width="20" height="20" alt="siteplay.ai logo" src="https://avatars.githubusercontent.com/u/229278305?s=48&v=4" /> Nuxt Siteplay.ai Project

This is an exported Nuxt project built for users who want a scalable Vue architecture with file-based routing, auto-imports, and built-in SEO capabilities. 

The project uses:

* **Nuxt** for routing, layouts, rendering, and build tooling.
* **Vue + TypeScript** for generated components.
* **Tailwind CSS v4** for styling.
* **Shadcn-style Vue primitives** for interactive UI elements.
* **SVG files, Iconify, and Lucide Vue** for icons.
* **Motion Vue** for generated animations.
* **Nuxt color mode** for light and dark mode support.

## Run the Project Locally

### 1. Install Dependencies

#### npm

```bash id="u63im2"
npm install
```

#### pnpm

```bash id="y1y9gx"
pnpm i
```

#### Yarn

```bash id="mbc7yz"
yarn
```

---

### 2. Run the Development Server

#### npm

```bash id="lgmn18"
npm run dev
```

#### pnpm

```bash id="v0g1gk"
pnpm dev
```

#### Yarn

```bash id="5k4z5n"
yarn dev
```

---

### 3. Build for Production

#### npm

```bash id="k58h4m"
npm run build
```

#### pnpm

```bash id="pij8t7"
pnpm build
```

#### Yarn

```bash id="6jlwm7"
yarn build
```

---

### 4. Preview the Production Build

#### npm

```bash id="1g9m7k"
npm run preview
```

#### pnpm

```bash id="4k6c6r"
pnpm preview
```

#### Yarn

```bash id="v3svz6"
yarn preview
```

## Styling with Tailwind CSS

**Files:** `app/assets/css/main.css` and `app/assets/css/theme.css`

Siteplay.ai generates Tailwind CSS v4 based components. Most visual changes can be made directly inside the generated Vue page and section components.

Start with these areas:

* `app/components/sections` for section-level layout and spacing.
* `app/components/common` for shared element styling.
* `tailwind.config.ts` for project-wide Tailwind configuration.
* `app/assets/css/main.css` for global styles.
* `app/assets/css/theme.css` for design tokens and CSS variables.

## SEO Metadata

**File:** `app/pages/**/*.vue`

Siteplay.ai exports SEO settings into Nuxt page metadata.

```ts id="jlwmw0"
const page = {
  seo: {
    title: "About Us Page",
    description: "lorem ipsum dolor sit...",
  },
} as Page;

definePageMeta({
  layout: "full-page-layout",
  seo: page.seo,
});
```

After export, review:

* Page titles and descriptions
* Open Graph metadata
* Canonical URLs
* `public/robots.txt`

# Deployment

The exported Nuxt project can be deployed anywhere that supports Nuxt.

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
* [Next.js Documentation](https://siteplay.ai/docs/frameworks/next)
* [React Documentation](https://siteplay.ai/docs/frameworks/react)
* [Vue Documentation](https://siteplay.ai/docs/frameworks/vue)
* [Website templates](https://siteplay.ai/templates)
