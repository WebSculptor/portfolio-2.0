import { Button } from "@/components/ui/button";

export default function ExperienceCard() {
  return (
    <div className="sm:rounded-3xl sm:bg-secondary w-full lg:max-w-md lg:max-h-[689.5px] flex flex-col justify-between md:gap-4 overflow-hidden sm:p-8 sm:border">
      <h2 className="text-xl">Work Experience</h2>

      <div className="h-full overflow-y-auto">
        {[1, 2].map((_, _key) => (
          <div
            key={_key}
            className="flex flex-col md:flex-row items-start justify-between gap-3 md:gap-6 py-4 md:py-6 border-b last:border-b-0"
          >
            <span className="text-muted-foreground text-sm">2021 - 2023</span>
            <div className="space-y-2 flex-1 max-w-xl">
              <p className="font-semibold">Product Designer at Google</p>
              <p className="text-muted-foreground text-sm">
                Tasked with envisioning and crafting innovative user interfaces
                and interactions for the company&apos;s cutting-edge products.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <Button className="rounded" variant="outline">
          Download Resume
        </Button>
      </div>
    </div>
  );
}
