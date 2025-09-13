import { CalendarDays, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";

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
      <div className="px-4 sm:px-6 md:px-8 py-5">
        <Link href={href} className="inline-block focus:outline-none">
          <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight font-barlow group-hover:underline underline-offset-4 decoration-2">
            {title}
          </h2>
        </Link>

        {/* Meta */}
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-500 dark:text-neutral-400">
          <span className="inline-flex items-center gap-1">
            <CalendarDays className="h-4 w-4" /> {friendlyDate}
          </span>
          <span className="inline-flex items-center gap-1">
            <MessageCircle className="h-4 w-4" /> {comments} Comments
          </span>
        </div>

        {/* Excerpt */}
        <p className="mt-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
          {excerpt}
        </p>

        {/* CTA */}
        <div className="mt-5">
          <Link
            href={href}
            className="inline-flex items-center  border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
          >
            Read article
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPostCard;
