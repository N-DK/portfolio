"use client";

import WrapperContent from "@/app/_ui/WrapperContent";
import WrapperSection from "./WrapperSection";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.4,
      ease: "backOut",
    },
  }),
};

export default function Contact() {
  return (
    <WrapperSection className="lg:w-[75%] xl:w-[75%]" id="contact">
      <WrapperContent
        title="Contact!"
        des="Feel free to reach out if you want a to build something together, have a question, or just want to connect."
      >
        {/* Email */}
        <motion.p
          className="mb-[1.666rem]"
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariants}
        >
          <Link
            href={`mailto:${"ngodangkhoawork271103@gmail.com"}`}
            className="text-foreground underline underline-offset-4"
          >
            ngodangkhoawork271103@gmail.com
          </Link>
        </motion.p>

        {/* Social icons */}
        <div className="flex w-[80px] justify-between">
          {[
            { icon: <FaGithub />, href: "" },
            { icon: <FaLinkedinIn />, href: "" },
            { icon: <FaTwitter />, href: "" },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={iconVariants}
              whileHover={{ scale: 1.25, rotate: 6 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Link href={item.href}>{item.icon}</Link>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          className="absolute bottom-[-35%] left-0 w-full text-muted-foreground text-sm"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
        >
          <Link
            href={""}
            className="text-center mb-2 hover:text-primary transition-colors cursor-pointer block"
          >
            Designed & built by <span className="text-primary">Khoa Ngo</span> —
            inspired by
            <span className="text-primary"> Austin Pham</span>
          </Link>
          <p className="text-center">Handcrafted by me © 2026.</p>
        </motion.div>
      </WrapperContent>
    </WrapperSection>
  );
}
