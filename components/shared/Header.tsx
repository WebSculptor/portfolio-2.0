"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Copy } from "lucide-react";

import MaxWidthContainer from "./MaxWidthContainer";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Me",
    path: "/about",
  },
  {
    name: "My Works",
    path: "/works",
  },
  {
    name: "Let's Talk",
    path: "/contact",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="w-full h-20 sm:h-[100px] bg-background/60 backdrop-blur-3xl z-20 sticky top-0 inset-x-0">
      <MaxWidthContainer className="flex items-center justify-between gap-x-6 h-full w-full">
        <Link href="/" className="flex items-center space-x-2 pointer">
          <Image
            src="/user.jpg"
            alt="Abdullahi Salihu"
            priority
            width={40}
            height={40}
            className="border object-contain rounded-full grayscale"
          />

          <p className="font-semibold text-base">Web Sculptor</p>
        </Link>

        <div className="w-full max-w-[998px] flex-1 hidden md:flex items-center justify-center space-x-6">
          {links.map((link) => (
            <Link
              href={link.path}
              key={link.path}
              className={cn(
                "text-[15px] font-medium hover:text-primary transition-colors pointer",
                {
                  "text-primary": link.path === pathname,
                  "text-muted-foreground": link.path !== pathname,
                }
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <p className="hidden md:flex items-center text-sm font-semibold pointer text-muted-foreground">
          contact@gmail.com
          <Copy className="w-3.5 h-3.5 ml-2" />
        </p>

        <MobileMenu />
      </MaxWidthContainer>
    </div>
  );
}