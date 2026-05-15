// components/ShowcaseCarousel.tsx
"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ShowcaseItem from "@/components/ShowcaseItem";
import { useCallback, useEffect, useState } from "react";

type ShowcaseItemProps = {
  title: string;
  des: string;
  slug: string;
  image_url: string;
};

export default function ShowcaseCarousel({
  items = [],
}: {
  items?: ShowcaseItemProps[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 4, // scroll 4 cùng lúc như trong ảnh
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((item) => (
            <div
              key={item.slug}
              className="flex-none w-full sm:w-1/2 lg:w-1/4 pr-6"
            >
              <ShowcaseItem {...item} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center mt-8 gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide group ${index + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex ? "bg-foreground" : "bg-muted-foreground"
            }`}
          />
        ))}

        {canScrollNext && (
          <button
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Next"
            className="absolute top-[-22%] right-4 w-8 h-8 flex items-center justify-center border border-muted-foreground/30 rounded-full text-foreground hover:bg-muted-foreground/10 transition-all"
          >
            ›
          </button>
        )}
      </div>
    </div>
  );
}
