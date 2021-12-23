import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '../lib/gtag'
// import * as gtag from '../lib/gtag'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* Google Adsense */}
                    <script data-ad-client="ca-pub-4545307603353405" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                    
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${GA_TRACKING_ID}', {
                            page_path: window.location.pathname,
                            });
                        `,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

    //   {/* Global Site Tag (gtag.js) - Google Analytics */}
    //   <Script
    //     strategy="afterInteractive"
    //     src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
    //   />
    //   <Script
    //     id="gtag-init"
    //     strategy="afterInteractive"
    //     dangerouslySetInnerHTML={{
    //       __html: `
    //         window.dataLayer = window.dataLayer || [];
    //         function gtag(){dataLayer.push(arguments);}
    //         gtag('js', new Date());
    //         gtag('config', '${gtag.GA_TRACKING_ID}', {
    //           page_path: window.location.pathname,
    //         });
    //       `,
    //     }}
    //   />