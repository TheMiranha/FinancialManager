import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans"; // import font
import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';

export const metadata: Metadata = {
  title: "FinancialManager",
  description: "Alpha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.className} antialiased dark:bg-gray-950`}>
      <body>
        <NextIntlClientProvider>
          {
            children
          }
        </NextIntlClientProvider>
      </body>
    </html>
  );
}