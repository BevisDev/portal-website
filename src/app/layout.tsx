import "@/styles/fonts.css";
import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portal Website by BevisDev",
  description: "Welcome to Portal Website",
};

type RootlayoutProps = Readonly<{ children: React.ReactNode }>;
const RootLayout: React.FC<RootlayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
};

export default RootLayout;
