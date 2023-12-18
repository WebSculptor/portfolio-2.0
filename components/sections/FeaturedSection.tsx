"use client";

import ProjectCard from "@/components/cards/ProjectCard";
import { client } from "@/sanity/lib/client";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "../ui/skeleton";

export default function FeaturedSection() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const sanityQuery = `*[_type == "projects" && favourite == true][0...2]{
        _id,
        "slug": slug.current,
        projectBanner,
        name,
        description,
      }`;

      const data = await client.fetch(sanityQuery);

      return data;
    },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
      {isPending ? (
        [1, 2].map((_, _key: number) => (
          <Skeleton key={_key} className="aspect-[1.25] w-full rounded-lg" />
        ))
      ) : isError ? (
        <span>Error: {error.message}</span>
      ) : (
        data?.map((project: ProjectCardProp) => (
          <ProjectCard key={project._id} {...project} />
        ))
      )}
    </div>
  );
}
