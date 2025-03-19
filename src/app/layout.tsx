import AppCacheProvider from "@/lib/material-ui/provider/AppProvider";
import StoreProvider from "@/lib/redux/provider/StoreProvider";
import "@/styles/globals.css";
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Portal Website by BevisDev",
  description: "Welcome to Portal Website",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body suppressHydrationWarning={true} className={poppins.className}>
        <StoreProvider>
          <AppCacheProvider>{children}</AppCacheProvider>
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
