import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./Provider";
export const metadata = {
  title: "PromoBot || Ads Generator",
  description: "Generate ads with Team Promobot",
};

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning={true}>
        <body className={outfit.className}>
          <Provider> {children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
