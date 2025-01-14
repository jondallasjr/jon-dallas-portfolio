import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer } from './components/Footer'; // Import the Footer component

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jonathan Dallas - Portfolio',
  description: 'AI Integration Specialist & Low-Code Expert',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Main Content */}
        <div className="min-h-screen bg-gray-50">
          {children} {/* This will render the page content */}
        </div>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}