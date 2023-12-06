import Image from "next/image";
import demoImg from "../../../public/reference.png";

export default function AboutDetails({ title, description }: AboutProps) {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-10 first:pt-0 pt-10 md:pt-20 lg:even:flex-row-reverse">
      <div className="relative w-full [1.3] md:w-[517px] bg-secondary/80 dark:bg-secondary/30 rounded-lg">
        <div className="w-full aspect-[1.3] overflow-hidden rounded-lg">
          <Image
            src={demoImg}
            alt="image"
            priority
            className="object-cover w-full aspect-[1.3]"
          />
        </div>
        <div className="absolute -bottom-7 -left-7 hidden md:block aspect-[1.3] w-[300px] bg-secondary/80 dark:bg-secondary/30 rounded-lg overflow-hidden shadow border-8 border-background">
          <Image
            src={demoImg}
            alt="image"
            priority
            className="object-cover w-full aspect-[1.3] rounded-lg"
          />
        </div>
      </div>
      <div className="flex-1">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-black lg:leading-[58px]">
          {title}
        </h1>
        <p className="text-sm md:text-base leading-7 md:leading-8 max-w-2xl my-4 mb-6">
          {description}
        </p>
      </div>
    </div>
  );
}
