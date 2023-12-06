"use client";

import HighlightsCard from "@/components/cards/HighlightsCard";
import MaxWidthContainer from "@/components/shared/MaxWidthContainer";

import demoImg from "../../../../public/reference.png";
import Image from "next/image";
import { useState } from "react";
import Filter from "@/components/shared/Filter";
import Overview from "@/components/shared/Overview";
import MasonryCard from "@/components/cards/MasonryCard";
import Changelog from "@/components/shared/Changelog";

const images = [
  "https://source.unsplash.com/bYuI23mnmDQ",
  "https://source.unsplash.com/Nllx4R-2c3o",
  "https://source.unsplash.com/lp40q07DIe0",
  "https://source.unsplash.com/wfalq01jJuU",
  "https://source.unsplash.com/rMHNK_skwwU",
  "https://source.unsplash.com/WBMjuGpbrCQ",
  "https://source.unsplash.com/nCUZ5BYBL_o",
  "https://source.unsplash.com/3u4fzMQZhjc",
  "https://source.unsplash.com/haOIqIPSwps",
  "https://source.unsplash.com/3UrYD7NNVxk",
  "https://source.unsplash.com/fm1JKDItlVM",
  "https://source.unsplash.com/qPpq1EVs8vw",
  "https://source.unsplash.com/xRyL63AwZFE",
  "https://source.unsplash.com/XeNKWTiCPNw",
  "https://source.unsplash.com/DFt3T5r_4FE",
  "https://source.unsplash.com/Ebwp2-6BG8E",
];
const filters = [
  {
    variant: "overview",
    btnText: "Project Overview",
  },
  {
    variant: "screenshots",
    btnText: "Screenshots",
  },
  {
    variant: "changelog",
    btnText: "Changelog",
  },
];

export default function ProjectDetailsPage() {
  const [activeTab, setActiveTab] = useState<string>("overview");

  const handleButtonClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full">
      <MaxWidthContainer className="py-10 md:py-20">
        <h1 className="w-full lg:max-w-xl text-2xl md:text-3xl lg:text-4xl font-black lg:leading-[45px]">
          GADA Studios
        </h1>
        <p className="flex-1 text-sm leading-6 md:text-[15px] md:leading-7 text-muted-foreground">
          GADA Studios is a brand and product design agency focused on building
          brands that work.
        </p>

        <div className="flex items-start flex-col gap-6 mt-10 lg:flex-row">
          <div className="flex-1 rounded-lg bg-secondary/80 dark:bg-secondary/20 aspect-[1.3] overflow-hidden">
            <Image
              src={demoImg}
              alt="image"
              priority
              className="object-cover w-full aspect-[1.3]"
            />
          </div>
          <HighlightsCard />
        </div>
      </MaxWidthContainer>

      <div className="w-full bg-secondary/80 dark:bg-secondary/20 border-y">
        <MaxWidthContainer className="py-10 md:py-20">
          <div className="flex items-center gap-4 flex-col sm:flex-row pb-6 border-b">
            {filters.map((filter) => {
              const btnFilters = {
                value: filter.variant,
                activeTab,
                handleButtonClick,
              };

              return (
                <Filter key={filter.variant} {...btnFilters}>
                  {filter.btnText}
                </Filter>
              );
            })}
          </div>

          <div className="mt-4 pt-4">
            {activeTab === "overview" ? (
              <Overview />
            ) : activeTab === "screenshots" ? (
              <MasonryCard images={images} />
            ) : (
              activeTab === "changelog" && <Changelog />
            )}
          </div>
        </MaxWidthContainer>
      </div>
    </div>
  );
}
