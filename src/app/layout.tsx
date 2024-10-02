import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../styles/globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BevisDev",
  description: "Website portal make by self",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="shortcut icon" href="/favicon.png" type="image/png" /> */}
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
