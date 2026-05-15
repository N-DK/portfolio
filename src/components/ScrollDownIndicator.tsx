"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = ["profile", "showcases", "projects", "contact"];

export default function ScrollDownIndicator() {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const update = () => setActiveHash(window.location.hash.replace("#", ""));
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);

  const isProfile = activeHash === "profile" || activeHash === "";
  // Chỉ hiện khi ở profile
  const isVisible = isProfile;

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key="scroll-indicator"
          className="fixed bottom-0 left-0 ml-6 md:ml-10 lg:ml-14 flex flex-col items-center w-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {/* Text xoay dọc */}
          <span
            className="tracking-[0.2em] text-foreground/50 select-none mb-2 uppercase"
            style={{ writingMode: "vertical-rl" }}
          >
            scroll down
          </span>

          {/* Đường kẻ dọc */}
          <div className="w-px h-[120px] bg-foreground/40" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
