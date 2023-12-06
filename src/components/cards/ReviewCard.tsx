import {
  BsStar as StarOutline,
  BsStarHalf as StarHalf,
  BsStarFill as StarFull,
} from "react-icons/bs";

import Image from "next/image";

function Star({ stars }: { stars: number }) {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let num = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <StarFull className="w-4 h-4 text-yellow-500" />
        ) : stars >= num ? (
          <StarHalf className="w-4 h-4 text-yellow-500" />
        ) : (
          <StarOutline className="w-4 h-4 text-yellow-500" />
        )}
      </span>
    );
  });

  return ratingStar;
}

export default function ReviewCard({
  review,
  ratings,
  name,
  createdAt,
  imgUrl,
}: ReviewProps) {
  return (
    <div className="rounded-2xl border bg-background group w-full flex flex-col">
      <div className="p-4 md:p-6 h-[148px]">
        <p className="text-base md:text-md text-foreground">{review}</p>
      </div>

      <div className="relative py-4 px-4 md:px-6 border-t bg-secondary/80 dark:bg-secondary/20 h-24 overflow-hidden rounded-b-2xl">
        <div className="flex flex-col">
          <h1 className="text-md text-foreground font-semibold">{name}</h1>
          <p className="text-xs text-accent-foreground -mt-0.5 mb-2">
            {createdAt}
          </p>
          <div className="flex items-center space-x-1">
            <Star stars={ratings} />
          </div>
        </div>
        <div className="absolute -bottom-6 -right-5 w-24 h-24 rounded-full border border-dashed border-primary/20 flex items-center justify-center p-1">
          <div className="w-full h-full rounded-full bg-secondary/80 overflow-hidden">
            <Image
              src={imgUrl}
              alt={name}
              width={108}
              height={108}
              quality={100}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
