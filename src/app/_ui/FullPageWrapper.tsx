"use client";

import { useEffect, useRef } from "react";
import { animate, useMotionValue } from "framer-motion";

const SECTIONS = ["profile", "showcases", "projects", "contact"];

// Easing tùy chỉnh — cảm giác "settle" tự nhiên hơn smooth
const SNAP_EASE = [0.32, 0.72, 0, 1] as const; // cubic-bezier
const SNAP_DURATION = 0.75; // giây

export default function FullPageWrapper({
  children,
}: {
  children: React.ReactNode[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isSnapping = useRef(false);
  const currentIndex = useRef(0);
  // motionValue để track scroll position
  const scrollY = useMotionValue(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateHash = (index: number) => {
      const id = SECTIONS[index];
      if (id && window.location.hash !== `#${id}`) {
        // history.replaceState(null, "", `#${id}`);
        window.location.hash = `#${id}`;
      }
    };

    const scrollToSection = (index: number) => {
      const target = sectionRefs.current[index];
      if (!target || isSnapping.current) return;

      isSnapping.current = true;
      currentIndex.current = index;
      updateHash(index);

      const targetY = index * window.innerHeight;
      const currentY = scrollY.get();

      // Dùng framer-motion animate thay cho scrollIntoView
      animate(currentY, targetY, {
        duration: SNAP_DURATION,
        ease: SNAP_EASE,
        onUpdate: (latest) => {
          scrollY.set(latest);
          container.scrollTop = latest;
        },
        onComplete: () => {
          isSnapping.current = false;
        },
      });
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isSnapping.current) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextIndex = Math.min(
        Math.max(currentIndex.current + direction, 0),
        SECTIONS.length - 1,
      );

      if (nextIndex !== currentIndex.current) {
        scrollToSection(nextIndex);
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (isSnapping.current) return;
      const delta = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(delta) < 50) return;

      const direction = delta > 0 ? 1 : -1;
      const nextIndex = Math.min(
        Math.max(currentIndex.current + direction, 0),
        SECTIONS.length - 1,
      );
      if (nextIndex !== currentIndex.current) {
        scrollToSection(nextIndex);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isSnapping.current) return;
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        scrollToSection(
          Math.min(currentIndex.current + 1, SECTIONS.length - 1),
        );
      }
      if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        scrollToSection(Math.max(currentIndex.current - 1, 0));
      }
    };

    // Khởi tạo scroll position từ hash
    const initialHash = window.location.hash.replace("#", "");
    const initialIndex = SECTIONS.indexOf(initialHash);
    if (initialIndex !== -1) {
      // Set ngay không animate để tránh flash
      container.scrollTop = initialIndex * window.innerHeight;
      scrollY.set(initialIndex * window.innerHeight);
      currentIndex.current = initialIndex;
    } else {
      updateHash(0);
    }

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [scrollY]);

  return (
    <div ref={containerRef} className="h-screen">
      {(children as React.ReactNode[]).map((child, i) => (
        <div
          key={i}
          ref={(el) => {
            sectionRefs.current[i] = el;
          }}
          className="h-screen w-full"
        >
          {child}
        </div>
      ))}
    </div>
  );
}
