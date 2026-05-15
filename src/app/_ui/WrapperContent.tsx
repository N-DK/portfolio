"use client";

import { motion, Variants } from "framer-motion";

interface WrapperContentProps {
  children: React.ReactNode;
  title: string;
  des: string;
  info?: React.ReactNode;
}

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function WrapperContent({
  children,
  title,
  des,
  info,
}: WrapperContentProps) {
  return (
    <div className="w-full min-h-[500px] relative">
      <div className={"flex justify-between items-center"}>
        <div className="">
          <motion.h2
            className="text-[1.51572rem] font-bold mb-3.5 leading-[1.1]"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUpVariants}
          >
            {title}
          </motion.h2>
          <motion.p
            className="max-w-[600px] mb-2 font-light leading-[1.7] text-muted-foreground"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUpVariants}
          >
            {des}
          </motion.p>
        </div>
        {info && (
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUpVariants}
          >
            {info}
          </motion.div>
        )}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
