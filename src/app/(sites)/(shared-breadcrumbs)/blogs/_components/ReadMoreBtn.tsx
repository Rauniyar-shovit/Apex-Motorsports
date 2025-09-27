"use client";

import { MoveRight } from "lucide-react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ReadMoreBtn = ({ href }: { href: string }) => {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();
  return (
    <LayoutGroup>
      <motion.button
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="py-4 cursor-pointer flex font-sans uppercase font-[600] text-sm items-center gap-2 text-primary"
        type="button"
        onClick={() => router.push(href)}
        // smooth parent layout changes too
      >
        <AnimatePresence mode="popLayout">
          {/* 👈 key to stop jump on unmount */}
          {hovered && (
            <motion.span
              key="readmore"
              initial={{ x: -12, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -12, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
                duration: 0.5,
              }}
              // animate position/size while entering/exiting
            >
              Read More
            </motion.span>
          )}
        </AnimatePresence>

        <motion.div
          animate={hovered ? { x: 6 } : { x: 0 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
            duration: 0.5,
          }}
          layout // arrow smoothly reflows as text enters/exits
        >
          <MoveRight />
        </motion.div>
      </motion.button>
    </LayoutGroup>
  );
};

export default ReadMoreBtn;
