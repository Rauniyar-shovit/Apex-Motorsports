"use client";
import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ReadMoreBtn from "./ReadMoreBtn";

const BlogPostCard = ({
  title,
  date,
  excerpt,
  href,
  image,
}: {
  title: string;
  date: string;
  excerpt: string;
  href: string;
  image: string;
}) => {
  return (
    <article className="group w-full max-w-4xl overflow-hidden mb-8">
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
          {date}
          <span>
            <Dot className="h-4 w-4" />
          </span>
        </div>

        {/* Excerpt */}
        <p className="mt-4 text-base md:text-lg leading-relaxed  font-sans  text-muted-primary">
          {excerpt}
        </p>

        {/* CTA */}
        <ReadMoreBtn href={href} />
      </div>
    </article>
  );
};

export default BlogPostCard;
