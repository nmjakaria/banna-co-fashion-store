import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: "BANNA Co. | Wear the moment.",
  description: "A minimal, editorial fashion storefront.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <CartProvider>
          <main className="grow">
            <Navbar />
            {children}
          </main>
          
          <Toaster 
            position="bottom-center"
            toastOptions={{
              style: {
                background: '#0E0E10',
                color: '#FAFAF8',
                borderRadius: '0px',
                fontSize: '14px',
                padding: '12px 24px',
              },
              success: {
                iconTheme: {
                  primary: '#C97A4A',
                  secondary: '#FAFAF8',
                },
              },
            }}
          />
        </CartProvider>
      </body>
    </html>
  );
}