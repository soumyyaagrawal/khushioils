import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],

});


 const plusJakartaSans = Plus_Jakarta_Sans({
      subsets: ['latin'],
      variable: '--font-plus-jakarta-sans', // Optional: for use with CSS variables (e.g., in Tailwind CSS)
    });


export const metadata = {
  title: "Bhagwati Oils",
  description: "Premium Edible Oils for Healthy Living",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={plusJakartaSans.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
