'use client';
import '@/app/global.css';
import { ThemeProvider } from '@/components/common/ThemeProvider';
import { DEFAULT_THEME, DEFAULT_DIR, DEFAULT_LANG } from '@/constants';

/*
// https://nextjs.org/docs/pages/getting-started/fonts
// next/font/google don't support latest google fonts always
// at the time of writing this code next/font/google don't support Geist Pixel https://fonts.google.com/specimen/Geist+Pixel?preview.script=Latn
// so you can uncomment below for more performance gains if font you used is supported
// if you uncomment this make sure you remove font imports from theme.css file.

// import your fonts and use fontClass on the html tag className
import { Roboto, Playfair_Display } from 'next/font/google';
export const bodyFont = Roboto({ subsets: ['latin'], variable: '--font-display', weight: ['400']  });
export const headingFont = Playfair_Display({ subsets: ['latin'], variable: '--font-heading', weight: ['400'] });
const fontClass = `${bodyFont.variable} ${headingFont.variable} antialiased`
*/
const fontClass = 'antialiased';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const defaultTheme = DEFAULT_THEME;
  const dir = DEFAULT_DIR;
  const lang = DEFAULT_LANG;

  return (
    <html dir={dir} lang={lang} suppressHydrationWarning className={fontClass}>
      <head>
        {/* fonts start */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&amp;display=swap"
          rel="stylesheet"
        ></link>
        {/* fonts end */}
      </head>
      <body className="body-font">
        <ThemeProvider
          attribute="class"
          storageKey="site-theme"
          defaultTheme={defaultTheme}
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
