import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Infratech',
  description: 'Innowacyjne rozwiązania dla twojego domu',
};

const inter = Inter({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pl'>
      <body className={inter.className} suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
