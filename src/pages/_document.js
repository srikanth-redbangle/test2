import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      {/* <script id="ruttl-site-embed-script" src="https://app.ruttl.com/plugin.js?id=nmwNLRu7QCSk4L2nH9x1&e=1" defer async></script> */}

      <Head />
      <body className="cursor-none">
        <Main />
        <NextScript />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          {/* <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PGLSQTH"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe> */}
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W8L7WRW3"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {/* <script
          id="ruttl-site-embed-script"
          src="https://app.ruttl.com/plugin.js?id=tE3kcRBcvSLsdS8ETeVO&e=1"
          defer
          async
        ></script> */}
      </body>
    </Html>
  )
}
