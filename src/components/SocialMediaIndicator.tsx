"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const SOCIALS = [
  { label: "Git", aria: "Github", href: "https://github.com/auspham" },
  {
    label: "In",
    aria: "LinkedIn",
    href: "https://www.linkedin.com/in/pnt263/",
  },
  { label: "Tw", aria: "Twitter", href: "https://twitter.com/thang_pham263" },
  { label: "Mail", aria: "Email", href: "mailto:hello@auspham.dev" },
];

export default function SocialMediaIndicator() {
  const [hovered, setHovered] = useState("Git");

  return (
    <div className="fixed mr-6 md:mr-10 lg:mr-14 right-0 top-1/2 -translate-y-1/2 z-3">
      <ul className="flex flex-col gap-4 items-end">
        {SOCIALS.map((social, i) => {
          const isActive = hovered === social.label;
          return (
            <motion.li
              key={social.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.08 }}
              className="flex items-center gap-2"
              onMouseEnter={() => setHovered(social.label)}
            >
              {/* Dot giữ nguyên vị trí, chỉ ẩn/hiện bằng opacity */}
              <motion.span
                animate={{
                  opacity: isActive ? 1 : 0,
                  scale: isActive ? 1 : 0.4,
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="w-1.5 h-1.5 rounded-full bg-foreground block"
              />

              <Link
                href={social.href}
                rel="noopener noreferrer"
                aria-label={social.aria}
                target="_blank"
                className="text-sm font-light tracking-wide transition-colors duration-200"
                style={{
                  color: isActive
                    ? "hsl(var(--foreground))"
                    : "hsl(var(--foreground) / 0.4)",
                }}
              >
                {social.label}
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
