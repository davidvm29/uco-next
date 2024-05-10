import Document, { Html, Head, Main, NextScript } from 'next/document'
import i18nextConfig from '../next-i18next.config'
import Script from 'next/script'


class MyDocument extends Document {
  render() {
    const currentLocale = this.props.__NEXT_DATA__.query.locale || i18nextConfig.i18n.defaultLocale
    return (
      <Html lang={currentLocale}>
        <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"/>
        <Script src="https://code.jquery.com/jquery-3.6.0.min.js"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
