import ProjectCard from "@/components/cards/ProjectCard";

export default function ProjectSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
      {[1, 2].map((_, _key) => (
        <ProjectCard key={_key} />
      ))}
    </div>
  );
}
