"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { Dot, MoveRight } from "lucide-react";
import { AnimatePresence, easeIn, LayoutGroup, motion } from "motion/react";

const textVariants = {
  rest: { x: -8, opacity: 0 },
  hover: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 22 },
  },
};

const iconVariants = {
  rest: { x: 0 },
  hover: { x: 6, transition: { type: "spring", stiffness: 300, damping: 22 } },
};

const BlogPostCard = ({
  title,
  date,
  comments,
  excerpt,
  href,
  image,
}: {
  title: string;
  date: string; // ISO or plain text
  comments: number;
  excerpt: string;
  href: string;
  image: string;
}) => {
  const friendlyDate = useMemo(() => {
    try {
      const d = new Date(date);
      if (isNaN(d.getTime())) return date;
      return new Intl.DateTimeFormat(undefined, {
        year: "numeric",
        month: "short",
        day: "2-digit",
      }).format(d);
    } catch {
      return date;
    }
  }, [date]);
  const [hovered, setHovered] = useState(false);
  return (
    <article className="group w-full max-w-4xl overflow-hidden">
      {/* Media */}
      <Link href={href} className="block focus:outline-none">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px"
            className="object-cover"
            priority
          />
          {/* subtle top/bottom fade for legibility on any image */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10" />
        </div>
      </Link>

      {/* Content */}
      <div className=" py-6">
        <Link href={href} className="inline-block focus:outline-none">
          <h2 className="text-2xl sm:text-3xl md:text-4xl  leading-tight tracking-relaxed font-barlow uppercase ">
            {title}
          </h2>
        </Link>

        {/* Meta */}
        <div className="mt-3 flex flex-wrap items-center gap-x-1 gap-y-2 text-muted-primary font-sans text-sm">
          {friendlyDate}
          <span>
            <Dot className="h-4 w-4" />
          </span>
          {comments} Comments
        </div>

        {/* Excerpt */}
        <p className="mt-4 text-lg leading-relaxed  font-sans  text-muted-primary">
          {excerpt}
        </p>

        {/* CTA */}
        <LayoutGroup>
          <motion.button
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className="py-4 cursor-pointer flex font-sans uppercase font-[600] text-sm items-center gap-2"
            type="button"
            layout // smooth parent layout changes too
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
                  layout // animate position/size while entering/exiting
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
      </div>
    </article>
  );
};

export default BlogPostCard;
