"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type ShowcaseItemProps = {
  title: string;
  des: string;
  slug: string;
  image_url: string;
  index?: number;
};

export default function ShowcaseItem({
  title,
  des,
  slug,
  image_url = "/ava.jpg",
  index = 0,
}: ShowcaseItemProps) {
  return (
    <motion.div
      className="max-w-[350px] w-full"
      // Fade up khi scroll vào view
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      {/* Image wrapper — zoom nhẹ khi hover */}
      <div className="relative rounded-md overflow-hidden">
        <motion.div whileHover="hover" initial="rest" animate="rest">
          <Link className="w-full block" href={`/showcases/${slug}`}>
            <motion.div
              className="h-[233px] relative"
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.05 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image
                src={image_url}
                alt={title}
                fill
                className="object-cover object-center"
              />
            </motion.div>
          </Link>

          {/* Overlay + tags — hiện khi hover */}
          <motion.div
            className="absolute top-0 w-full h-full rounded-md overflow-hidden flex justify-center items-center bg-[#0000004d]"
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Tags — stagger xuất hiện lần lượt */}
            <motion.div
              className="w-[70%] text-center"
              variants={{
                rest: { opacity: 0, y: 10 },
                hover: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
            >
              {["NodeJS", "React", "TypeScript", "MongoDB"].map((tag) => (
                <span
                  key={tag}
                  className="text-[.7em] inline-block bg-transparent text-white font-medium border-2 border-white py-[.2em] px-[1em] rounded-full mr-[.5em] mb-[.5em]"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Text — slide up nhẹ sau image */}
      <motion.h3
        className="text-[1.31951rem] text-light font-bold mt-5"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          delay: index * 0.1 + 0.15,
          ease: "easeOut",
        }}
      >
        <Link aria-label="Link to showcase" href={`/showcases/${slug}`}>
          {title}
        </Link>
      </motion.h3>

      <motion.div
        className="my-[.6rem] font-light text-light leading-[1.8] text-[14px]"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          delay: index * 0.1 + 0.22,
          ease: "easeOut",
        }}
      >
        {des}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          delay: index * 0.1 + 0.29,
          ease: "easeOut",
        }}
      >
        <Link
          href={`/showcases/${slug}`}
          className="uppercase text-light font-medium text-[14px] hover:underline transition-all duration-300 ease-in-out"
        >
          view project
        </Link>
      </motion.div>
    </motion.div>
  );
}
