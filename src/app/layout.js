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
        <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 z-50">
          <nav className="container mx-auto px-2 py-4 flex"> {/* Added flex and items-center */}
            <ul className="flex justify-center space-x-6 font-bold w-full items-center"> {/* Added w-full */}
              <li><Link href="/" className="text-lime-600 drop-shadow-lg text-xl">Página Inicial</Link></li>
              <li><Link href="/como-chegar" className="text-lime-600 drop-shadow-lg text-xl">Como Chegar</Link></li>
              <li><Link href="/hospedagem" className="text-lime-600 drop-shadow-lg text-xl">Hoteis</Link></li>
              <li><Link href="/presentes" className="text-lime-600 drop-shadow-lg text-xl">Presentes</Link></li>
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