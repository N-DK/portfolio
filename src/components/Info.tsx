"use client";

import Image from "next/image";

export default function Info() {
  return (
    <div className="flex items-center">
      <div className="w-[50px] h-[50px] rounded-full overflow-hidden relative">
        <Image
          src="/ava.jpg"
          alt="Avatar"
          fill
          className="object-cover"
          style={{
            objectPosition: "center center",
          }}
        />
      </div>
      <div className="ml-4">
        <h3 className="text-[16px] text-foreground font-bold">Khoa Ngo</h3>
        <p className="text-[14px] text-muted-foreground">
          Full Stack Developer
        </p>
      </div>
    </div>
  );
}
