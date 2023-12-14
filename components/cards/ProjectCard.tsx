import Image from "next/image";
import Link from "next/link";

export default function ProjectCard() {
  return (
    <div className="sm:bg-secondary rounded-lg sm:rounded-3xl border group overflow-hidden">
      <div className="w-full aspect-[1.4] border-b">
        <Image
          src="/user.jpg"
          alt="me"
          width={666}
          height={200}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
          priority
        />
      </div>
      <div className="p-4 sm:p-6">
        <Link href="/works/gada" className="pointer w-max">
          <h2 className="text-base sm:text-lg font-semibold w-max">
            Project Name
          </h2>
        </Link>
        <p className="truncate text-muted-foreground text-sm sm:text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          recusandae repellat et a. Sed itaque labore ea cumque nostrum dolor
          laudantium velit quod tempore maiores corrupti porro, ex quasi
          reprehenderit.
        </p>
      </div>
    </div>
  );
}
