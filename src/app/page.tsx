import Image from "next/image";

import bannerImg from "../../public/banner.svg";
import MaxWidthContainer from "@/components/shared/MaxWidthContainer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Heading from "@/components/shared/Heading";
import ProjectCard from "@/components/cards/ProjectCard";
import ReviewCard from "@/components/cards/ReviewCard";
import { aboutContent, projects, reviews } from "@/constants";
import AboutDetails from "@/components/shared/AboutDetails";

export default function Home() {
  const underConstruction = true;

  return (
    <main>
      <div className="relative h-[600px] md:h-[658px] bg-secondary/80 dark:bg-secondary/10 border-b overflow-hidden">
        <Image
          src={bannerImg}
          alt="banner"
          className="w-full h-full bg-repeat absolute top-0 left-0 inset-0 pointer-events-none select-none -z-10"
        />

        <MaxWidthContainer className="h-full flex flex-col items-center justify-center relative text-center">
          <div className="w-full h-[1089px] rounded-full bg-background blur-md absolute top-1/2 -translate-y-1/2 inset-0 -z-10">
            <div className="w-full h-full rounded-full bg-secondary/80 dark:bg-secondary/40"></div>
          </div>

          <h1 className="w-full max-w-[840px] text-3xl md:text-5xl lg:text-6xl font-black lg:leading-[68px]">
            Empower Your Business: Create and Sell with Framer!
          </h1>

          <p className="text-sm md:text-base leading-7 md:leading-8 max-w-2xl my-4 mb-6">
            With years of experience in web development, I specialize in
            creating custom web applications that help businesses achieve their
            goals by adapting innovative solutions.
          </p>

          <Link
            href="/wall-of-love"
            className={buttonVariants({
              variant: "secondary",
              className:
                "py-8 space-x-3 my-6 rounded-xl transition duration-300",
            })}
          >
            <div className="flex items-center -space-x-5">
              {Array.from({ length: 3 }).map((_, _key) => (
                <div
                  key={_key}
                  className="w-10 h-10 rounded-full bg-background border-2"
                ></div>
              ))}
            </div>
            <p className="text-base">Read Customer Review</p>
            <ArrowRight className="w-6 h-6 text-primary" />
          </Link>

          <div className="rounded-3xl border border-primary w-8 h-14 -mb-15 flex items-end justify-center pb-2">
            <span className="w-4 h-4 bg-primary rounded-full"></span>
          </div>
        </MaxWidthContainer>
      </div>

      <div className="w-full pt-10 md:pt-20">
        <MaxWidthContainer className="flex flex-col gap-14">
          <Heading
            title="Under Construction"
            subtitle="Projects I'm currently working on"
            path="/projects"
            btnText="All Projects"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, _key) => (
              <ProjectCard key={_key} underConstruction={underConstruction} />
            ))}
          </div>

          {aboutContent.slice(0, 1) && <AboutDetails {...aboutContent[0]} />}
        </MaxWidthContainer>
      </div>

      <div className="w-full pt-10 md:pt-20">
        <MaxWidthContainer className="flex flex-col gap-14">
          <Heading
            title="Some of my projects"
            subtitle="List of projects I've worked on."
            path="/projects"
            description="I've worked on a lot of little projects over the years, but these are my favorites. Many of them are open-source, so if you discover anything that interests you, check out the code and contribute if you have suggestions for how to enhance it. You'll find a meaningful selection of web apps that I've created over my coding adventure here."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, _key) => (
              <ProjectCard key={_key} {...project} showButtons={true} />
            ))}
          </div>
        </MaxWidthContainer>
      </div>

      <div className="w-full pt-10 md:pt-20">
        <MaxWidthContainer className="flex flex-col gap-14">
          <Heading
            title="Testimonials"
            subtitle="Customer Testimonials"
            path="/wall-of-love"
            description="Discover why our customers love our products by browsing their reviews below. We're committed to providing high-quality materials."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.slice(0, 2).map((review, _key) => (
              <ReviewCard key={_key} {...review} />
            ))}
          </div>
        </MaxWidthContainer>
      </div>
    </main>
  );
}
