import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import demoImg from "../../../public/reference.png";

export default function ProjectCard({
  underConstruction,
  showButtons,
}: {
  underConstruction?: boolean;
  showButtons?: boolean;
}) {
  return (
    <div className="rounded-2xl border bg-background group w-full md:w-[352.664px]">
      <div className="w-full h-64 bg-secondary/20 rounded-t-2xl overflow-hidden">
        <Image
          src={demoImg}
          alt="image"
          priority
          className="object-cover w-full h-full group-hover:scale-110 transition duration-200"
        />
      </div>
      <div className="px-5 pt-3 py-6">
        <h2 className="text-xl font-bold">GADA Studios</h2>
        <p className="text-sm line-clamp-2 mt-2 opacity-60 group-hover:opacity-100 transition-opacity duration-200">
          GADA Studios is a brand and product design agency focused on building
          brands that work.
        </p>

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
    </div>
  );
}
