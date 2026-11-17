import type { Metadata } from "next";
import { Geist_Mono, Ubuntu } from "next/font/google";
import { LanguageProvider } from "./context/LanguageContext";
import "./globals.css";

const geistSans = Ubuntu({
  variable: "--font-geist-sans",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WC Aircon",
  description: "Best Aircondition Service in Singapore",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-base lg:text-lg scroll-smooth">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
