import { ReactNode } from "react";

import { cn } from "@/lib/utils";

export default function MaxWidthContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("mx-auto w-full max-w-6xl px-4 ", className)}>
      {children}
    </section>
  );
}
