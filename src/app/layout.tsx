import type {Metadata} from "next";
import "./globals.css";
import {Providers} from "@/app/provider";
import {fonts} from "@/app/font";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer"
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import { ColorModeScript } from '@chakra-ui/react'
import { theme } from '@/app/theme';

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
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <NextIntlClientProvider messages={messages}>
      <Providers>
        <Header></Header>
        {children}
        <Footer></Footer>
      </Providers>
    </NextIntlClientProvider>
    </body>
    </html>
  );
}
