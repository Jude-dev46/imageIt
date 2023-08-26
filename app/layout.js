import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ImageIT",
  description:
    "A next application that converts text to images and give variations of images",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          type="image/png"
          sizes="16x16"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image/png"
          sizes="180x180"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
