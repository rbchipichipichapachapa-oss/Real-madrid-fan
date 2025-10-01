import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Real Madrid Fan',
  description: 'Die ultimative Fanseite für Real Madrid Anhänger',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`${inter.className} bg-transparent`}>
        <div className="background-container">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/soccer-field.svg`}
            alt="Soccer Field"
            width={1920}
            height={1080}
            className="soccer-field"
            priority
          />
        </div>
        <div className="ball-container">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/soccer-ball.svg`}
            alt="Soccer Ball"
            width={300}
            height={300}
            className="soccer-ball"
            priority
          />
        </div>
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold">Real Madrid Fan</div>
              <div className="space-x-4">
                <Link href="/" className="hover:text-gray-600">Home</Link>
                <Link href="/news" className="hover:text-gray-600">News</Link>
                <Link href="/spielplan" className="hover:text-gray-600">Spielplan</Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-100 py-6 mt-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>&copy; 2025 Real Madrid Fan. Alle Rechte vorbehalten.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
