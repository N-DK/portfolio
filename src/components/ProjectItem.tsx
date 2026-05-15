"use client";

import Link from "next/link";
import { FaGithub, FaLaptopCode, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

type ProjectItemProps = {
  title: string;
  des: string;
  programmingLanguage: string;
  star: number;
  folk: number;
  index?: number; // để stagger delay
};

export default function ProjectItem({
  title,
  des,
  programmingLanguage,
  star,
  folk,
  index = 0,
}: ProjectItemProps) {
  return (
    <motion.div
      // A — Fade up khi mount / scroll vào view
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      // B — Hover lift
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      // C — Tap scale
      whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
      className="border rounded-lg border-solid border-repo-border p-4 cursor-pointer"
    >
      <div className="flex items-center gap-1">
        <FaLaptopCode />
        <Link
          className="font-medium text-[.9rem] leading-normal text-repo hover:underline underline-offset-2 transition-all duration-300 ease-in-out"
          href={""}
        >
          {title}
        </Link>
      </div>
      <p className="mt-[10px] text-[.8rem] leading-normal font-light text-light">
        {des}
      </p>
      <div className="flex items-center gap-6 mt-[30px] text-[.7rem]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-orange-500" />
          {programmingLanguage}
        </div>
        <span className="flex items-center gap-1">
          <FaStar />
          {star}
        </span>
        <span className="flex items-center gap-1">
          <FaGithub />
          {folk}
        </span>
      </div>
    </motion.div>
  );
}
