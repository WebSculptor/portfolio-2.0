import AboutDetails from "@/components/shared/AboutDetails";
import Hero from "@/components/shared/Hero";
import MaxWidthContainer from "@/components/shared/MaxWidthContainer";
import { aboutContent } from "@/constants";

export default function AboutPage() {
  const title = `Hi there 👋 <br /> My name is Abdullahi Salihu, <br /> I'm a ReactJs Developer`;

  return (
    <div className="w-full">
      <Hero
        title={title}
        description="With years of experience in web development, I specialize in
            creating custom web applications that help businesses achieve their
            goals by adapting innovative solutions."
      />
      <MaxWidthContainer className="pt-10 md:pt-20">
        {aboutContent.map((content, _key) => (
          <AboutDetails key={_key} {...content} />
        ))}
      </MaxWidthContainer>
    </div>
  );
}
