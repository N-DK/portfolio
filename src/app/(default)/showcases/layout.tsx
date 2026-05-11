import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center",
  description: "Get help with your MEM Movies account, streaming, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
