"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { nav_links } from "@/constants";
import MaxWidthContainer from "./MaxWidthContainer";
import { cn } from "@/lib/utils";
import { AlignJustify } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full h-20 py-2 md:py-4 border-b sticky top-0 inset-x-0 bg-background/80 backdrop-blur-md z-20">
      <MaxWidthContainer className="flex items-center justify-between w-full h-full md:h-11">
        <Link href="/" className="pointer text-lg font-bold">
          WebSculptor
        </Link>
        <ul className="hidden md:flex items-center space-x-5">
          {nav_links.map((link) => (
            <Link
              href={link.path}
              key={link.path}
              className={cn(
                "group font-regular flex items-center text-muted-foreground hover:text-primary transition",
                {
                  "text-primary font-semibold": link.path === pathname,
                }
              )}
            >
              <p className="text-[15px]">{link.name}</p>
              {link.icon && (
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={cn(
                    "w-4 h-4 text-red-700 transition ml-1.5 group-hover:text-red-500 mt-[1px]",
                    {
                      "text-red-500": link.path === pathname,
                    }
                  )}
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </Link>
          ))}
        </ul>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="secondary" size="icon" className="flex md:hidden">
              <AlignJustify className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full px-4 border-l-0 sm:border-l sm:w-[540px]">
            <div className="py-10 px-3">
              <ul className="flex flex-col items-start">
                {nav_links.map((link) => (
                  <Link
                    href={link.path}
                    key={link.path}
                    className={cn(
                      "group font-regular flex items-center justify-between text-muted-foreground hover:text-primary transition border-b w-full py-4",
                      {
                        "text-primary font-semibold": link.path === pathname,
                      }
                    )}
                  >
                    <p className="text-[15px]">{link.name}</p>
                    {link.icon && (
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={cn(
                          "w-4 h-4 text-red-700 transition ml-1.5 group-hover:text-red-500 mt-[1px]",
                          {
                            "text-red-500": link.path === pathname,
                          }
                        )}
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    )}
                  </Link>
                ))}
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </MaxWidthContainer>
    </header>
  );
}
