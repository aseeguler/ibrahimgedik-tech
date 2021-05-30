import Document, { Html, Head, Main, NextScript } from "next/document";
import SiteConfig from "site.config";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang={SiteConfig.lang}>
        <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="static/font/stylesheet.css" />

          <meta name="robots" content="follow, index" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content={SiteConfig.description} />
          <link rel="canonical" href={SiteConfig.siteUrl} />

          <meta property="og:url" content={SiteConfig.siteUrl} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={SiteConfig.title} />
          <meta property="og:description" content={SiteConfig.description} />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content={SiteConfig.siteUrl} />
          <meta name="twitter:title" content={SiteConfig.title} />
          <meta name="twitter:description" content={SiteConfig.description} />

          <link href="/static/site.webmanifest" rel="manifest" />
          <link
            href="/static/img/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/static/img/icon-favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/static/img/icon-favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link
            color="#23ab67"
            href="/static/img/icon-safari-pinned-tab.svg"
            rel="mask-icon"
          />
          <meta content="#081C15" name="theme-color" />
          <meta content="#081C15" name="msapplication-TileColor" />
          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
