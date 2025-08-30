import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { FlagsmithProvider } from "flagsmith/react";
import flagsmith from "flagsmith";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sparkleen laundry",
  description: "A laundry service app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <FlagsmithProvider
          options={{ environmentID: "GugcXWy5TPjqqYwPrdZKFj" }}
          flagsmith={flagsmith}
        >
          {children}
        </FlagsmithProvider>
      </body>
    </html>
  );
}

