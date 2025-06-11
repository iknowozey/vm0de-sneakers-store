import type {Metadata} from "next"
import {Montserrat} from "next/font/google"
import "./globals.css"
import React from "react";
import {Header} from "@/structure/components/shared/header";
import {ThemeProvider} from "@/structure/components/providers/theme-provider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "vmode",
  description: "vmode - магазин стильных кроссовок",
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ru"
      suppressHydrationWarning
    >
    <body className={`${montserrat.variable} antialiased`}>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Header />
      {children}
    </ThemeProvider>
    </body>
    </html>
  )
}
