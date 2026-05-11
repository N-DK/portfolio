"use client";

import { LoaderCircle } from "lucide-react";

export default function LoadingSuspense() {
  return (
    <div className="grid min-h-screen place-items-center bg-foreground relative z-50">
      <LoaderCircle
        strokeWidth={3}
        className="text-turquoise size-10 animate-spin"
      />
    </div>
  );
}
