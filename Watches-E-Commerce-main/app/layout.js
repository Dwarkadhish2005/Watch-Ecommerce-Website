import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TimePiece - Luxury Watch Store',
  description: 'Discover our collection of luxury timepieces. Quality, elegance, and precision in every watch.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <main className="min-h-screen pt-16 bg-white">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
