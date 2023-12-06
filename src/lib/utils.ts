import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function removeLeadingSlash(pathname: string): string | undefined {
  if (pathname === "/") {
    return undefined; // If pathname is only "/", return nothing
  }

  // Remove leading "/" and return the result
  return pathname.substring(1);
}
