import { easeIn, easeOut } from "motion";

export const overlayVariants = {
  hidden: { y: "-100%" },
  visible: {
    y: 0,
    transition: {
      duration: 0.4,
      ease: easeOut,
      when: "beforeChildren",
      // Run children in sequence: Header first, then Links container
      staggerChildren: 0.25,
      staggerDirection: 1,
    },
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.4,
      ease: easeIn,
      when: "afterChildren",
      // Reverse on exit: Links out first, then Header, then overlay
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

// 2) Links container (stagger children here)
export const linksContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0 }, // starts after Header finishes due to overlay's stagger
  },
  exit: {
    transition: { staggerChildren: 0.06, staggerDirection: -1 },
  },
};

// 3) Individual link
export const linkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: easeOut },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.25, ease: easeIn },
  },
};
