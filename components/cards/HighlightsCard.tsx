import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const listItems = [
  "Amazing Features",
  "Clean Design",
  "Stunning Effects",
  "Beautiful Horizontal Services Tabs",
  "CMS Integrated to showcase your Work",
  "Minimal Testimonials Carousel",
  "Mobile Responsive",
];

export default function HighlightsCard() {
  return (
    <div className="bg-secondary max-w-sm w-full rounded-sm p-5">
      <h2 className="text-lg font-semibold">Highlights:</h2>
      <ul className="list-item space-y-2 pb-4 my-4 border-b">
        {listItems.map((item) => (
          <li className="text-muted-foreground text-[15px]" key={item}>
            - {item}
          </li>
        ))}
      </ul>

      <Link href="/" target="_blank">
        <Button className="w-full rounded">Live Preview</Button>
      </Link>
    </div>
  );
}
