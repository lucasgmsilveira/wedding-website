import localFont from "next/font/local";
import "./globals.css";

import { Inter } from 'next/font/google'
import generateImagePaths from './generate-image-paths'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Casamento Lucas e Raquel",
  description: "Celebremos juntos nossa união!",
};

export default function RootLayout({ children }) {
  const imagePaths = generateImagePaths();
  return (
    <html lang="en">
      <head>

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <h1>
          <a href="/">CASAMENTO LUCAS E RAQUEL</a>
          </h1>
        {/* TODO: adicionar navbar */}
        {children}
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  const imagePaths = generateImagePaths();
  return { props: { imagePaths } };
}