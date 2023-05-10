import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html className="no-js">
        <Head />
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
