import "../styles/globals.css";
import type { AppProps } from "next/app";

import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-KM3XR6VKMB"
      />
      <Script
        className="script"
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-KM3XR6VKMB', {
page_path: window.location.pathname,
});
`,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
