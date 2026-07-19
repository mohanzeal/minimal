import { FC, StrictMode, ReactNode } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '@/style.css';
import { DEFAULT_DIR, DEFAULT_LANG } from '@/constants';

const FullPageLayout: FC<{ children: ReactNode }> = (props) => {
  const title = 'Site';
  const dir = DEFAULT_DIR;
  const lang = DEFAULT_LANG;

  return (
    <StrictMode>
      <HelmetProvider>
        <Helmet>
          <html dir={dir} lang={lang}>{``}</html>
          <title>{title}</title>
          <body className="body-font">{``}</body>
        </Helmet>
      </HelmetProvider>
      {props.children}
    </StrictMode>
  );
};

export default FullPageLayout;
