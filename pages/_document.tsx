import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html className="no-js">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&family=Raleway:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              const darkMode =
                window.matchMedia &&
                window.matchMedia('(prefers-color-scheme: dark)').matches;
              if (darkMode) {
                document.body.classList.add('dark-mode');
              }
            `,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
