import "./globals.css";
import { Button } from "@/components/ui/button";

import logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"; //need to find out what this is for

import { Layout, Main } from "@/components/craft";

import { cn } from "@/lib/utils";
import { CodeXml } from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL("https://tofaramususa.me"),
  title: "Tofara Mususa | Software Engineer",
  description:
    "l am Software Engineer from Harare, Zimbabwe based in Abu Dhabi, UAE",
};

//an interface describes the structure of an object.
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Layout>
      <body className={cn("m-6 text-lg antialiased")}>
        <Nav />
        <Main className="fade-in-2 mx-auto max-w-xl">{children}</Main>
        <Footer />
        <Analytics />
      </body>
    </Layout>
  );
}

const Nav = () => {
  return (
    <nav className="mx-auto my-8 mb-24 max-w-xl fade-in md:my-24 md:md-36">
      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              priority
              src={logo}
              className="transition-all -mt-3 items-start hover:opacity-70 dark:invert-0"
              width={150}
              height={150}
              alt="tofara's logo"
            ></Image>
          </Link>
          <div className="flex items-center gap-4 text-base">
            <a
              className="text-muted-foreground transition-all hover:text-foreground"
              href="https://github.com/tofaramususa"
              target="_blank"
            >
              Github
            </a>
            <Link href="https://github.com/tofaramususa" target="_blank">
              <Button
                variant="outline"
                size="icon"
                className="bg-accent/30 rounded-xl"
              >
                <CodeXml className="h-[1-2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="text-sm fade-in-3 mx-auto mb-12  max-w-xl md:mt-24">
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
