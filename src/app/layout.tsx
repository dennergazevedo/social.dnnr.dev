import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { Ubuntu } from "next/font/google";

import "./globals.css";

import Footer from "./components/Footer";
import Header from "./components/Header";

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ['latin'],
  preload: true
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <body className={ubuntu.className} style={{ paddingTop: 56 }}>
        <Header />
        {children}
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
