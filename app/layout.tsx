import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Roxy's Fitness for All – Transform Your Life",
  description:
    "Join Roxy's Fitness for All and transform your body and life with personalized workout routines, expert nutrition tips, and daily motivation.",
  keywords: ['fitness', 'workout', 'nutrition', 'personal trainer', "Roxy's Fitness"],
  openGraph: {
    title: "Roxy's Fitness for All",
    description: 'Transform Your Body, Transform Your Life',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}