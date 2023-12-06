import ProjectCard from "@/components/cards/ProjectCard";
import Hero from "@/components/shared/Hero";
import MaxWidthContainer from "@/components/shared/MaxWidthContainer";
import { projects } from "@/constants";

export default function ProjectsPage() {
  return (
    <div className="w-full">
      <Hero
        title="A list of my completed code projects is provided below."
        description="I've worked on a lot of little projects over the years, but these are my favorites."
      />

      <MaxWidthContainer className="pt-10 md:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, _key) => (
            <ProjectCard key={_key} {...project} showButtons={true} />
          ))}
        </div>
      </MaxWidthContainer>
    </div>
  );
}
