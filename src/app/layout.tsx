import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/app/components/theme-provider";
import Script from "next/script";
import Analytics from "./components/analytics";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Radio Alaba a Dios - En Todo Tiempo Alaba a Dios ",
  description:
    "Estación de radio cristiana hispana con música, programas y contenido inspirador",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Load gtag.js */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6GMMNJNS9D"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-6GMMNJNS9D', { debug_mode: true });
  `}
        </Script>
      </head>
      <body className={inter.className}>
        {/* Wrap Analytics in Suspense if it uses useSearchParams */}
        <Suspense>
          <Analytics />
        </Suspense>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
