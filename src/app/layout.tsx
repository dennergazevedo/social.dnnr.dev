import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  weight: "400",
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
      <body className={ubuntu.className}>{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
