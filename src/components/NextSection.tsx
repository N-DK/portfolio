"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["profile", "showcases", "projects", "contact"];

export default function NextSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateSection = () => {
      const hash = window.location.hash.replace("#", "") || "profile";
      const index = sections.indexOf(hash);
      if (index !== -1) setCurrentIndex(index);
    };

    updateSection();
    window.addEventListener("hashchange", updateSection);
    return () => window.removeEventListener("hashchange", updateSection);
  }, []);

  const nextSection =
    currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null;

  const label = useMemo(() => {
    if (!nextSection) return "";
    return nextSection.charAt(0).toUpperCase() + nextSection.slice(1);
  }, [nextSection]);

  const handleClick = () => {
    if (!nextSection) return;
    window.location.hash = `#${nextSection}`;
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  };

  return (
    <AnimatePresence mode="wait">
      {nextSection && (
        <motion.div
          key={nextSection}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          onClick={handleClick}
          className="fixed -bottom-2 left-1/2 z-10 flex h-[60px] w-[100px] -translate-x-1/2 cursor-pointer"
        >
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative flex w-full flex-col items-center justify-start gap-1"
          >
            {/* Label với hiệu ứng nhấp nháy nhẹ khi hover */}
            <motion.span
              className="uppercase tracking-widest text-sm"
              whileHover={{ opacity: 0.6 }}
              transition={{ duration: 0.2 }}
            >
              {label}
            </motion.span>

            {/* Line kẻ dọc với animate height + pulse */}
            <motion.span
              className="block w-[1.5px] bg-foreground origin-top"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              exit={{ scaleY: 0, opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.32, 0.72, 0, 1],
                delay: 0.1,
              }}
              style={{ height: 50 }}
            />

            {/* Dot chạy xuống dọc line */}
            <motion.span
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1.5px] h-[1.5px] rounded-full bg-foreground"
              animate={{ y: [0, -50, 0], opacity: [0, 1, 0] }}
              transition={{
                duration: 1.6,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0.4,
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
