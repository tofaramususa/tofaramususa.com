import "./globals.css";
import { ReactNode } from "react";

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import { Layout, Main } from "@/components/craft";
import Navbar from "./components/Navbar";

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL("https://tofaramususa.me"),
  title: "Tofara Mususa | Software Engineer",
  description:
    "l am Software Engineer from Harare, Zimbabwe based in Abu Dhabi, UAE",
  icons: {
    icon: [
      {
        url: "/gear-svgrepo-com.svg"
      },
    ],
  },
};

//an interface describes the structure of an object.
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Layout>
      <body className={cn("m-6 text-lg antialiased text-color-black")}>
        <Navbar />
        <Main className="fade-in-2 mx-auto mt-0 max-w-xl">{children}</Main>
        <Footer />
        <Analytics />
      </body>
    </Layout>
  );
}

const Footer = () => {
  return (
    <footer className="text-sm fade-in-3 mx-auto mb-12  max-w-xl">
      <a
        href="https://www.linkedin.com/in/tofaramususa"
        target="_blank"
        className="flex items-center gap-2 text-muted-foreground transition-all hover:text-foreground"
      >
        <span className="text-muted-foreground text-md">
          © {new Date().getFullYear()} Tofara Mususa. All rights reserved.
        </span>
      </a>
    </footer>
  );
};
