import {Outfit} from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";


export const metadata = {
  title: "PromoBot || Ads Generator",
  description: "Generate ads with Team Promobot",
};

const outfit = Outfit({subsets: ["latin"]});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
      className={outfit.className}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
