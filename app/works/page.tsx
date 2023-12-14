import ProjectCard from "@/components/cards/ProjectCard";
import Hero from "@/components/shared/Hero";
import MaxWidthContainer from "@/components/shared/MaxWidthContainer";

export default function WorksPage() {
  return (
    <div className="w-full">
      <Hero
        showPath
        title="A list of my completed code projects is provided below."
        description="I've worked on a lot of little projects over the years, but these are my favorites."
      />

      <MaxWidthContainer className="pt-16 md:pt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, _key) => (
            <ProjectCard key={_key} />
          ))}
        </div>
      </MaxWidthContainer>
    </div>
  );
}
