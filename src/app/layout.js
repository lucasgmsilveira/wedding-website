// import localFont from "next/font/local";
// import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata = {
//   title: "Casamento ~ Raquel e Lucas",
//   description: "Nosso site estará pronto em breve!",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }

import localFont from "next/font/local";
import "./globals.css";
import Link from 'next/link';

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

export const metadata = {
  title: "Casamento ~ Raquel e Lucas",
  description: "Bem-vindos ao site com informações do casamento da Raquel e do Lucas!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-80 z-50">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex justify-center space-x-6">
              <li><Link href="/" className="text-gray-800">Home</Link></li>
              <li><Link href="/como-chegar" className="text-gray-800">How to Get There</Link></li>
              <li><Link href="/hospedagem" className="text-gray-800">Hotels</Link></li>
              <li><Link href="/presentes" className="text-gray-800">Gifts</Link></li>
            </ul>
          </nav>
        </header>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}