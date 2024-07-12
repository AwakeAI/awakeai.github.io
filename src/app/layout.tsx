import type {Metadata} from "next";
import "./globals.css";
import {Providers} from "@/app/provider";
import {fonts} from "@/app/font";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer"
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import {ColorModeScript} from '@chakra-ui/react'
import {theme} from '@/app/theme';
import Script from 'next/script'

export default async function RootLayout({
                                           children,
                                         }: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={fonts.inter.variable}>
    <body>
    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
    <NextIntlClientProvider messages={messages}>
      <Providers>
        <Header></Header>
        {children}
        <Footer></Footer>
      </Providers>
    </NextIntlClientProvider>
    </body>
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-JVXPVJ54JS"/>
    <Script id="google-analytics">
      {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JVXPVJ54JS');
          `}
    </Script>
    </html>
  );
}
