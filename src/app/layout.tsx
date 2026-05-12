import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NProgressProvider from "@/components/NProgress";
import QueryProvider from "@/provider/QueryProvider";
import type { Metadata } from "next";
import { Roboto_Slab, Montserrat } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { ThemeProvider } from "next-themes";
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-roboto-slab",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Khoa Ngo.",
    default: "Portfolio | Khoa Ngo.",
  },
  description: "Khoa Ngo. - Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${robotoSlab.variable} antialiased relative min-h-screen`}
      >
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <Header />
          <QueryProvider>
            <Suspense fallback={null}>
              <NProgressProvider>
                <div className="relative min-h-screen">{children}</div>
              </NProgressProvider>
            </Suspense>
          </QueryProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
