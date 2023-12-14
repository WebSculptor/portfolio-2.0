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

// export function removeLeadingSlash(pathname: string): string | undefined {
//   if (pathname === "/") {
//     return undefined; // If pathname is only "/", return nothing
//   }

//   // Remove leading "/" and split the pathname into segments
//   const segments = pathname.substring(1).split("/");

//   // Replace special characters with spaces and capitalize each segment
//   const formattedPath = segments
//     .map((segment) => capitalize(segment.replace(/[^a-zA-Z0-9]/g, " ")))
//     .join(" - ");

//   return formattedPath;
// }

// function capitalize(str: string): string {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }
