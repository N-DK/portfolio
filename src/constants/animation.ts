import { Variants } from "framer-motion";

export const FADE_UP_VARIANTS: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const NOTIFICATION_VARIANTS: Variants = {
  initial: { x: 100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    x: 100,
    opacity: 0,
    transition: { duration: 0.5, ease: "easeIn" },
  },
};

export const PROGRESS_BAR_VARIANTS: Variants = {
  initial: { width: "100%" },
  animate: {
    width: "0%",
    transition: { duration: 3, ease: "linear" },
  },
};

export const PAGE_TRANSITION_VARIANTS: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};
