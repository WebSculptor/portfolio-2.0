import ReviewCard from "@/components/cards/ReviewCard";
import Hero from "@/components/shared/Hero";
import MaxWidthContainer from "@/components/shared/MaxWidthContainer";
import { reviews } from "@/constants";

export default function WallOfLovePage() {
  return (
    <div className="w-full">
      <Hero
        title="Evaluations, reviews, and comments from clients."
        description="I've received good feedback from customers, and I'd love to hear your thoughts. For access to the upload a feedback feature, kindly get in touch with me."
      />
      <MaxWidthContainer className="flex flex-col gap-14 pt-10 md:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, _key) => (
            <ReviewCard key={_key} {...review} />
          ))}
        </div>
      </MaxWidthContainer>
    </div>
  );
}
