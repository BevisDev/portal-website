import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "@/styles/fonts.css";
import "@/styles/globals.css";
import "../styles/globals.css";
import { Metadata } from "next";

export const rootMedata: Metadata = {
  title: "Portal Website by BevisDev - Next.js 14",
  description: "Welcome to Portal Website",
};

type RootlayoutProps = Readonly<{ children: React.ReactNode }>;
const RootLayout: React.FC<RootlayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body suppressHydrationWarning={true}>
        <AppRouterCacheProvider options={{ key: "css" }}>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
