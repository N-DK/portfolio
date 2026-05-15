"use client";

import { ReactNode } from "react";

type WrapperSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export default function WrapperSection({
  children,
  className,
  id,
}: WrapperSectionProps) {
  return (
    <section id={id} className={`mt-44 md:mt-0 lg:mt-0 xl:mt-0`}>
      <div
        className={`relative w-full md:w-full lg:w-[80%] xl:w-[60%] h-screen flex items-center mx-auto ${className || ""}`}
      >
        {children}
      </div>
    </section>
  );
}
