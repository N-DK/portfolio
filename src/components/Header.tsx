"use client";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const tabs = ["Profile", "Showcases", "Projects", "Contact"];

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState("Profile");

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <motion.header
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 p-[2.5rem]"
    >
      <div className="mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-semibold leading-6 tracking-tight text-foreground font-roboto-slab"
        >
          Khoa <br /> Ngo.
        </Link>

        <div className="flex items-end gap-8">
          <nav className="hidden md:flex items-center gap-8">
            {tabs.map((tab) => (
              <a
                href={`#${tab.toLowerCase()}`}
                key={tab}
                onClick={() => setActive(tab)}
                className="relative pb-2 text-sm font-medium tracking-wide text-muted-foreground transition-colors duration-300 hover:text-foreground cursor-pointer"
              >
                <span className={active === tab ? "text-foreground" : ""}>
                  {tab}
                </span>
                {active === tab && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-destructive"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </a>
            ))}
          </nav>

          <div>
            {!mounted ? (
              <div className="h-8 w-16 animate-pulse rounded-full bg-muted" />
            ) : (
              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="relative flex h-8 w-16 items-center rounded-full bg-muted px-1 transition-all duration-300"
              >
                <Sun
                  size={16}
                  className={`absolute left-2 transition-all duration-300 ${
                    isDark
                      ? "opacity-40 text-muted-foreground"
                      : "opacity-100 text-accent"
                  }`}
                />
                <Moon
                  size={16}
                  className={`absolute right-2 transition-all duration-300 ${
                    isDark
                      ? "opacity-100 text-foreground"
                      : "opacity-40 text-muted-foreground"
                  }`}
                />
                <div
                  className={`h-6 w-6 rounded-full bg-primary-foreground shadow-lg transition-transform duration-300 ${
                    isDark ? "translate-x-8" : "translate-x-0"
                  }`}
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
