"use client";

import WrapperSection from "./WrapperSection";
import { motion, Variants } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Profile() {
  return (
    <WrapperSection id="profile">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-12 items-center w-full">
        {/* Text side */}
        <motion.div
          className="flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Heading */}
          <motion.div variants={itemVariants} className="flex flex-col gap-1">
            <p className="text-base font-medium text-muted-foreground">
              Hello, my name is
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-foreground font-roboto-slab">
              Ngo Dang <span className="text-primary">Khoa.</span>
            </h1>
          </motion.div>

          {/* Role */}
          <motion.div variants={itemVariants}>
            <h2 className="text-xl font-medium">I build things for the web.</h2>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="flex flex-col gap-3">
            <p className="text-base leading-relaxed max-w-md text-justify text-muted-foreground">
              Hi there! I create web apps and enjoy learning new tech. This site
              is where I share and grow as a developer. It's a space for me to
              reflect on my experiences and document what I've learned.
            </p>
            <p className="text-base leading-relaxed max-w-md text-muted-foreground">
              With a detail oriented-focus, I enjoy creating simple but
              effective solutions to improve application performance, ease of
              maintenance, and user experience.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 pt-2"
          >
            <a
              href="./resume/austinpham_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95 border"
            >
              Get My Resume
              <Download size={16} />
            </a>
          </motion.div>
        </motion.div>

        {/* Image side */}
        <motion.div
          className=""
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative max-w-500 w-[84%]">
            <div className="relative overflow-hidden z-3">
              <div aria-hidden="true" className="w-full pb-[100%]" />
              <Image
                src="/ava.jpg"
                alt="Khoa Ngo"
                fill
                className="object-cover absolute top-0 left-0 w-full h-full"
                style={{
                  objectPosition: "center center",
                }}
              />
            </div>
            <div className="absolute bg-shade w-[90%] h-[90%] top-[30%] left-[30%]" />
          </div>
        </motion.div>
      </div>
    </WrapperSection>
  );
}
