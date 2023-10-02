import {AppProps} from "next/app";
import "../styles/index.css";
import Script from "next/script";
import {Theme} from '@radix-ui/themes';
import {ThemeProvider} from 'next-themes';
import '@radix-ui/themes/styles.css';
import {appWithTranslation} from "next-i18next";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class" enableSystem defaultTheme="system">
        <Theme>
            <Component {...pageProps} />
        </Theme>
      </ThemeProvider>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-JVXPVJ54JS"/>
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JVXPVJ54JS');
          `}
      </Script>
    </>
  );
}

export default MyApp;
