import Image from "next/image";

import userImg from "../../public/user.jpg";

export default function AboutCard() {
  return (
    <div className="sm:rounded-3xl sm:bg-secondary w-full flex flex-col xl:flex-row overflow-hidden sm:border">
      <div className="w-full aspect-[1.3] xl:h-[404px] xl:w-72 rounded overflow-hidden">
        <Image
          src={userImg}
          alt="me"
          className="object-cover grayscale w-full h-full"
          priority
        />
      </div>

      <div className="flex flex-col pt-6 sm:p-6 lg:p-10 flex-1 space-y-2 lg:space-y-4">
        <h2 className="text-xl">My design journey</h2>
        <p className="text-sm text-muted-foreground leading-loose">
          My journey in the world of technology and product design has been an
          exhilarating adventure. I specialize in crafting user-centered
          experiences that not only look great but function flawlessly. I
          believe in the power of collaboration and constant learning. I thrive
          in multidisciplinary teams design methodologies. When I&apos;m not
          immersed in pixels and prototypes, you can find me in the great
          outdoors, seeking inspiration from nature and the world around me.
          design methodologies. When I&apos;m not immersed in pixels and
          prototypes, you can find me in the great outdoors, seeking inspiration
          from nature and the world around me.design methodologies. When
          I&apos;m not immersed in pixels and prototypes, you can find me in the
          great outdoors, seeking inspiration.
        </p>
      </div>
    </div>
  );
}
