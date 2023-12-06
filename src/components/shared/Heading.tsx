import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Heading({
  title,
  subtitle,
  description,
  path,
  btnText,
}: HeadingProps) {
  return (
    <div className="flex items-end justify-between gap-6 flex-wrap">
      <div className="space-y-2">
        <p className="pl-3 border-l border-blue-500 text-sm">{subtitle}</p>
        <h1 className="text-3xl md:text-4xl font-black">{title}</h1>
        {description && (
          <p className="text-[15px] w-full md:max-w-2xl pt-1 text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      {path && (
        <Link
          href={path}
          className={buttonVariants({
            variant: "outline",
            className: "py-5",
          })}
        >
          {btnText ? btnText : "View More"}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      )}
    </div>
  );
}
