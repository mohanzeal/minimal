Checkout [full astro + vue website documentation](https://siteplay.ai/docs/frameworks/astro-vue)

## <img width="20" height="20" alt="siteplay.ai logo" src="https://avatars.githubusercontent.com/u/229278305?s=48&v=4" /> Astro + Vue Siteplay.ai Project

This is an exported Astro Vue project that is built for users who want Astro's fast static-first routing with Vue components for interactive sections.

The project uses:

- **Astro** for file-based routing, layouts, and static-first rendering.
- **Vue + TypeScript** for generated interactive components.
- **Tailwind CSS v4** for styling.
- **Shadcn-style Vue primitives** for interactive UI elements.
- **SVG files, Iconify, and Lucide Vue** for icons.
- **Motion Vue** for generated animations.
- **Astro client directives** such as `client:load` when Vue components need browser-side hydration.

## Run the Project Locally

### 1. Install Dependencies

#### npm

```bash
npm install
```

#### pnpm

```bash
pnpm i
```

#### Yarn

```bash
yarn
```

---

### 2. Run the Development Server

#### npm

```bash
npm run dev
```

#### pnpm

```bash
pnpm dev
```

#### Yarn

```bash
yarn dev
```

---

### 3. Build for Production

#### npm

```bash
npm run build
```

#### pnpm

```bash
pnpm build
```

#### Yarn

```bash
yarn build
```

---

### 4. Preview the Production Build

#### npm

```bash
npm run preview
```

#### pnpm

```bash
pnpm preview
```

#### Yarn

```bash
yarn preview
```

## SEO Metadata

**Files:** `src/layouts/FullPageLayout.astro` and `src/pages/**/*.astro`

Siteplay.ai page SEO settings are passed to the Astro layout through `seo` props.

```astro
<FullPageLayout seo={page.seo}>
  <!-- Page content -->
</FullPageLayout>
```

# Deployment

The exported Astro Vue project produces a fast static build by default and can be deployed to:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages
- AWS S3
- Any static hosting provider

Before deploying:

- Run `npm run build`
- Review final SEO metadata and domain-specific URLs
- Test key forms and links
- Check light and dark mode if both are enabled

## More Resources

- [Astro + React Documentation](https://siteplay.ai/docs/frameworks/astro-react)
- [Next.js Documentation](https://siteplay.ai/docs/frameworks/next)
- [Nuxt Documentation](https://siteplay.ai/docs/frameworks/nuxt)
- [React Documentation](https://siteplay.ai/docs/frameworks/react)
- [Vue Documentation](https://siteplay.ai/docs/frameworks/vue)
- [Website templates](https://siteplay.ai/templates)
