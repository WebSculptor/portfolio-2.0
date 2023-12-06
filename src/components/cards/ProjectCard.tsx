import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import demoImg from "../../../public/reference.png";
import construction from "../../../public/construction.jpeg";

export default function ProjectCard({
  underConstruction,
  showButtons,
}: {
  underConstruction?: boolean;
  showButtons?: boolean;
}) {
  return (
    <div className="rounded-xl border bg-background group w-full md:w-[352.664px]">
      <div className="w-full h-64 bg-secondary/80 dark:bg-secondary/20 rounded-t-xl overflow-hidden">
        <Image
          src={demoImg}
          alt="image"
          priority
          className="object-cover w-full h-full group-hover:scale-110 transition duration-200"
        />
      </div>

      <div className="pt-6">
        <div className="px-5 space-y-1">
          <h2 className="text-xl font-bold">GADA Studios</h2>
          <p className="text-sm line-clamp-2 mt-2 opacity-60 group-hover:opacity-100 transition-opacity duration-200">
            GADA Studios is a brand and product design agency focused on
            building brands that work.
          </p>
        </div>

        {underConstruction && showButtons ? (
          <div className="w-full h-14 rounded-b-lg overflow-hidden mt-5 dark:opacity-50 dark:group-hover:opacity-70 transition-opacity duration-200">
            <Image
              src={construction}
              alt="under construction"
              className="w-full h-full object-cover"
              priority
            />
          </div>
        ) : (
          <div className="px-5 pb-6">
            {showButtons && (
              <div className="flex items-center justify-between gap-4 mt-5 w-[calc(100%-10px)] group-hover:w-full transition-all duration-300">
                <div className="flex items-center gap-2">
                  <Link
                    href={`/projects/project-detail`}
                    className={buttonVariants({
                      size: "sm",
                      variant: "outline",
                      className: "pointer",
                    })}
                  >
                    View Project
                  </Link>
                  <Link
                    href="/"
                    target="_blank"
                    className={buttonVariants({
                      size: "sm",
                      variant: "outline",
                      className: "pointer",
                    })}
                  >
                    View Demo
                  </Link>
                </div>

                <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
