import { ClientProviders } from "@/components/client-providers";
import Nav from "@/components/nav";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter, Roboto_Mono } from 'next/font/google';
import { getNavExpandedState } from "../actions/states/nav-expanded-state";
import "../globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})


export const metadata: Metadata = {
  title: 'z0 by OpenSource',
  description: 'z0 by OpenSource',
}

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  const isExpanded = getNavExpandedState()
  return (
    <html lang={locale} className={`${inter.variable} ${roboto_mono.variable}`}>
      <body className='flex'>
        <NextIntlClientProvider messages={messages}>
          <ClientProviders>
            <Nav className='border-r bg-muted' isExpanded={isExpanded} />
            <main className='flex-1'>{children}</main>
          </ClientProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
