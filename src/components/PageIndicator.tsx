"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SECTIONS = ["profile", "showcases", "projects", "contact"];

export default function PageIndicator() {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const updateActive = () => {
      const hash = window.location.hash.replace("#", "");
      const index = SECTIONS.indexOf(hash);
      setActiveIndex(index);
    };

    updateActive();
    window.addEventListener("hashchange", updateActive);
    return () => window.removeEventListener("hashchange", updateActive);
  }, []);

  const handleClick = (section: string) => {
    window.location.hash = section;
  };

  return (
    <div className="flex w-[35px] h-[100px] fixed top-1/2 transform -translate-y-1/2 z-9999 items-start justify-center flex-col ml-6 md:ml-10 lg:ml-14">
      {SECTIONS.map((section, i) => {
        const isActive = i === activeIndex;

        return (
          <div
            key={section}
            onClick={() => handleClick(section)}
            className="relative overflow-hidden w-full h-5 flex items-center cursor-pointer rounded-full"
          >
            <motion.div
              className="h-[2px] rounded-full bg-foreground"
              initial={false}
              animate={{
                width: isActive ? "100%" : "70%",
                opacity: isActive ? 1 : 0.4,
                scaleY: isActive ? 1.5 : 1,
              }}
              transition={{
                width: { type: "spring", stiffness: 300, damping: 28 },
                opacity: { duration: 0.25 },
                scaleY: { duration: 0.2 },
              }}
              style={{ originY: "center" }}
            />
          </div>
        );
      })}
    </div>
  );
}
