"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const TABS = ["Profile", "Showcases", "Projects", "Contact"];

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const updateSection = () => {
      const hash =
        window.location.hash.replace("#", "").toLowerCase() || "profile";
      const index = TABS.findIndex((tab) => tab.toLowerCase() === hash);
      if (index !== -1) setActiveIndex(index);
    };

    updateSection();
    window.addEventListener("hashchange", updateSection);
    return () => window.removeEventListener("hashchange", updateSection);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-0 left-0 z-50 w-screen px-6 py-8 md:px-10 lg:px-14"
    >
      <div className="mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-semibold leading-6 tracking-tight text-foreground font-roboto-slab"
        >
          Khoa <br /> Ngo.
        </Link>

        <div className="flex items-start gap-8">
          <nav className="hidden md:flex items-center gap-8">
            {TABS.map((tab, index) => (
              <a
                key={tab}
                href={`#${tab.toLowerCase()}`}
                onClick={() => setActiveIndex(index)}
                className="relative pb-2 text-sm font-medium tracking-wide transition-colors duration-300 cursor-pointer"
                style={{
                  color:
                    activeIndex === index
                      ? "var(--foreground)"
                      : "var(--muted-foreground)",
                }}
              >
                {tab}
                {activeIndex === index && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-destructive"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </a>
            ))}
          </nav>
          {!mounted ? (
            <div className="h-[20px] w-[40px] animate-pulse rounded-full bg-muted" />
          ) : (
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="relative flex h-[20px] w-[40px] items-center rounded-full bg-muted px-1 transition-all duration-300"
            >
              <div
                className={`h-[25px] w-[25px] left-0 top-[50%] translate-y-[-50%] absolute rounded-full bg-foreground shadow-lg transition-transform duration-300 ${
                  isDark ? "translate-x-4" : "translate-x-0"
                }`}
              >
                <Sun
                  size={16}
                  className={`absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] transition-all duration-300 ${
                    isDark
                      ? "opacity-0 text-muted-foreground"
                      : "opacity-100 text-accent"
                  }`}
                />
                <Moon
                  size={16}
                  className={`absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] transition-all duration-300 ${
                    isDark
                      ? "opacity-100 text-primary-foreground"
                      : "opacity-0 text-muted-foreground"
                  }`}
                />
              </div>
            </button>
          )}
        </div>
      </div>
    </motion.header>
  );
}
