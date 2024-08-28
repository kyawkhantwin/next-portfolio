import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head >
        {/* Primary Meta Tags */}
        <title>🔗 Check Out My Portfolio</title>
        <meta name="title" content="🔗 Check Out My Portfolio" />
        <meta
          name="description"
          content="Explore my portfolio to see my projects, skills, and experiences. Feel free to reach out if you have any questions or want to connect! 😊"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://next-portfolio-bay-one.vercel.app/" />
        <meta property="og:title" content="🔗 Check Out My Portfolio" />
        <meta
          property="og:description"
          content="Explore my portfolio to see my projects, skills, and experiences. Feel free to reach out if you have any questions or want to connect! 😊"
        />
        <meta property="og:image" content="https://next-portfolio-git-main-kyaw-khant-wins-projects.vercel.app/hero.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://next-portfolio-bay-one.vercel.app/" />
        <meta property="twitter:title" content="🔗 Check Out My Portfolio" />
        <meta
          property="twitter:description"
          content="Explore my portfolio to see my projects, skills, and experiences. Feel free to reach out if you have any questions or want to connect! 😊"
        />
        <meta property="twitter:image" content="https://next-portfolio-git-main-kyaw-khant-wins-projects.vercel.app/hero.png" />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-3 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex flex-col items-center justify-center py-10">
            <p className="text-default-600">
            &copy; 2024 Kyaw Khant Win&apos;s Portfolio. All rights reserved.
              </p>
            
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
