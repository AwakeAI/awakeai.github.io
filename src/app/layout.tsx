import "./globals.css";
import {Providers} from "@/app/provider";
import {fonts} from "@/app/font";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer"
import {ColorModeScript} from '@chakra-ui/react'
import {theme} from '@/app/theme';
import Script from 'next/script'
import type {Metadata, Viewport} from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://awakeai.ca"),
  title: {
    default: "AwakeAI Inc.",
    template: "%s · AwakeAI",
  },
  description: "AwakeAI builds privacy-preserving AI vision for senior care: real-time activity understanding with no wearables. A Mila startup based in Montreal.",
  openGraph: {
    type: "website",
    siteName: "AwakeAI",
    title: "AwakeAI Inc.",
    description: "Transforming caregiving with optical sensors and privacy-preserving AI.",
    images: [{url: "/images/og.jpg", width: 1200, height: 630}],
  },
};

export const viewport: Viewport = {
  themeColor: [
    {media: "(prefers-color-scheme: light)", color: "#ffffff"},
    {media: "(prefers-color-scheme: dark)", color: "#0B0B0D"},
  ],
};

export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={fonts.inter.variable}>
    <body>
    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
    <Providers>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </Providers>
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-JVXPVJ54JS"/>
    <Script id="google-analytics">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-JVXPVJ54JS');
      `}
    </Script>
    </body>
    </html>
  );
}
