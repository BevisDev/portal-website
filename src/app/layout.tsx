import type { Metadata } from "next";
// import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import "../styles/globals.scss";

// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "700", "900"],
//   display: "swap",
// });

const lora = localFont({
  src: [
    {
      path: "./fonts/Lora-VariableFont_wght.ttf",
      weight: "normal",
      style: "normal",
    },
    {
      path: "./fonts/Lora-Italic-VariableFont_wght.ttf",
      weight: "normal",
      style: "italic",
    },
  ],
  variable: "--font-lora",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={lora.className}>{children}</body>
    </html>
  );
}
