"use client";

import WrapperContent from "@/app/_ui/WrapperContent";
import WrapperSection from "./WrapperSection";
import ShowcaseCarousel from "@/components/ShowcaseCarousel";

const items = [
  {
    title: "mRental",
    des: "Rental car platform...",
    slug: "mrental",
    image_url: "https://picsum.photos/200",
  },
  {
    title: "Project 2",
    des: "Description...",
    slug: "project-2",
    image_url: "https://picsum.photos/200",
  },
  {
    title: "Project 3",
    des: "Description...",
    slug: "project-3",
    image_url: "https://picsum.photos/200",
  },
  {
    title: "Project 4",
    des: "Description...",
    slug: "project-4",
    image_url: "https://picsum.photos/200",
  },
  {
    title: "Project 5",
    des: "Description...",
    slug: "project-5",
    image_url: "https://picsum.photos/200",
  },
  {
    title: "Project 6",
    des: "Description...",
    slug: "project-6",
    image_url: "https://picsum.photos/200",
  },
];
export default function Showcase() {
  return (
    <WrapperSection className="lg:w-[75%] xl:w-[75%]" id="showcases">
      <WrapperContent
        title="Showcase."
        des="These are some highlight projects. Each page discusses the purpose of the project, what was learned, and how I came up with solutions."
      >
        <div className="mt-8">
          <ShowcaseCarousel items={items} />
        </div>
      </WrapperContent>
    </WrapperSection>
  );
}
