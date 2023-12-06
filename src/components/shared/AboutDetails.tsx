import Image from "next/image";
import demoImg from "../../../public/reference.png";

export default function AboutDetails({ title, description }: AboutProps) {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-10 py-10 md:py-20 lg:even:flex-row-reverse">
      <div className="relative h-80 w-full md:h-[468px] md:w-[517px] bg-secondary/30 rounded-lg">
        <div className="w-full h-full overflow-hidden rounded-lg">
          <Image
            src={demoImg}
            alt="image"
            priority
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute -bottom-7 -left-7 hidden md:block h-[260px] w-[300px] bg-secondary/30 rounded-lg overflow-hidden shadow border-8 border-background">
          <Image
            src={demoImg}
            alt="image"
            priority
            className="object-cover w-full h-full rounded-lg"
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
