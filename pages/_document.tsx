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
        <script type="text/javascript">
  window.heap = window.heap || [];
  heap.load = function(e, t) {
    window.heap.appid = e;
    window.heap.config = t = t || {};
    var r = document.createElement("script");
    r.type = "text/javascript";
    r.async = true;
    r.src = "https://cdn.heapanalytics.com/js/heap-" + e + ".js";
    var a = document.getElementsByTagName("script")[0];
    a.parentNode.insertBefore(r, a);
    for (var n = function(e) {
      return function() {
        heap.push([e].concat(Array.prototype.slice.call(arguments, 0)));
      };
    }, p = [
      "addEventProperties",
      "addUserProperties",
      "clearEventProperties",
      "identify",
      "resetIdentity",
      "removeEventProperty",
      "setEventProperties",
      "track",
      "unsetEventProperty"
    ], o = 0; o < p.length; o++) {
      heap[p[o]] = n(p[o]);
    } // Added the closing curly brace for the for loop
  };
  heap.load("2151964733");
</script>

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
