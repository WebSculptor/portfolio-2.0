"use client";

import Hero from "@/components/shared/Hero";
import MaxWidthContainer from "@/components/shared/MaxWidthContainer";
import Image from "next/image";

import demoImg from "../../../public/user.jpg";
import HighlightsCard from "@/components/cards/HighlightsCard";
import { useState } from "react";
import Filter from "@/components/shared/Filter";
import Overview from "@/components/shared/Overview";
import Changelog from "@/components/shared/Changelog";

const filters = [
  {
    variant: "overview",
    btnText: "Project Overview",
  },
  {
    variant: "changelog",
    btnText: "Changelog",
  },
];

export default function ProjectDetails() {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const underConstruction = true;

  const handleButtonClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full">
      <Hero
        title="Gada Studios"
        description="I've worked on a lot of little projects over the years."
      />

      <MaxWidthContainer className="pt-16 md:pt-28 max-w-7xl">
        <div className="flex items-start flex-col gap-6 lg:flex-row">
          <div className="flex-1 rounded bg-secondary aspect-[1.3] overflow-hidden">
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

      <MaxWidthContainer className="pt-16 md:pt-28 max-w-7xl">
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
          ) : (
            activeTab === "changelog" && <Changelog />
          )}
        </div>
      </MaxWidthContainer>
    </div>
  );
}
