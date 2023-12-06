import React from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import Link from "next/link";
import { footerLinks } from "@/constants";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function Footer() {
  return (
    <footer className="mt-10 md:mt-20 border-t w-full bg-secondary/20">
      <MaxWidthContainer className="py-10 flex items-center justify-center md:justify-between text-center md:text-start gap-4 flex-wrap">
        <p className="text-[15px] text-muted-foreground">
          <span>
            Copyright © 2023 | Framer Template - Made with ❤️ by Samar Jamil
          </span>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <span>
                <QuestionMarkCircledIcon className="w-4 h-4 text-primary pointer ml-2" />
              </span>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>About the design</AlertDialogTitle>
                <AlertDialogDescription>
                  Samar Jamil created a template for this portfolio using
                  Framer. I chose to utilize NextJs and Tailwind to code it
                  since it looked amazing and I wanted to show off my skills.
                  Thanks are due to Samar Jamil.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Close</AlertDialogCancel>
                <AlertDialogAction asChild>
                  <Link
                    href="https://mellow.framer.website/"
                    target="_blank"
                    className="pointer"
                  >
                    Check it Out
                  </Link>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </p>

        <div className="flex items-center space-x-2">
          {footerLinks.map((link, _key) => (
            <Link
              href={link.path}
              key={_key}
              className="w-10 h-10 rounded-lg group bg-secondary/50 hover:bg-secondary transition duration-200 pointer flex items-center justify-center"
              title={link.title}
            >
              <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition duration-200" />
            </Link>
          ))}
        </div>
      </MaxWidthContainer>
    </footer>
  );
}
