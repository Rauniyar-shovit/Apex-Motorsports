"use client";

import { urlFor } from "@/sanity/lib/image";
import { BlockContent } from "@/sanity/types";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const url = urlFor(value).fit("max").url();
      const alt = value?.alt || "Image";
      return (
        <figure className="may-6">
          <Image
            src={url}
            alt={alt}
            width={1200}
            height={675}
            // Responsive image behavior
            sizes="(min-width:1536px) 1200px, (min-width:1280px) 1024px, (min-width:1024px) 896px, (min-width:768px) 704px, 100vw"
            className="w-full h-auto object-cover "
          />
          {value?.alt && (
            <figcaption className="mt-2 text-xs sm:text-sm text-muted-foreground">
              {value.alt}
            </figcaption>
          )}
        </figure>
      );
    },
    code: ({ value }) => (
      <pre className="my-4 overflow-x-auto  bg-muted p-3 sm:p-4 text-xs sm:text-sm md:text-base leading-relaxed">
        <code className="whitespace-pre-wrap break-words">{value.code}</code>
      </pre>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1
        className="font-barlow uppercase tracking-tight mt-10 sm:mt-12 mb-3 sm:mb-4
                     text-2xl  md:text-3xl leading-tight text-foreground"
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        className="font-barlow uppercase tracking-tight mt-8 sm:mt-10 mb-2 sm:mb-3
                     text-xl  md:text-2xl leading-snug text-foreground"
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        className="font-barlow uppercase tracking-tight mt-6 sm:mt-8 mb-2
                     text-lg  md:text-xl leading-snug text-foreground"
      >
        {children}
      </h3>
    ),

    normal: ({ children }) => (
      <p className="my-4 text-base   leading-7 md:leading-8 break-words text-muted-primary">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-4 list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-base text-muted-primary">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="my-4 list-decimal pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-base  text-muted-primary">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const target = value?.blank ? "_blank" : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target ? "noopener noreferrer" : undefined}
          className="underline underline-offset-2 break-words"
        >
          {children}
        </a>
      );
    },
    code: ({ children }) => (
      <code className="rounded bg-muted px-1 py-0.5 text-xs sm:text-sm break-words text-muted-primary">
        {children}
      </code>
    ),
  },
};
export default function PortableContentRenderer({
  value,
}: {
  value: BlockContent | null;
}) {
  if (!value?.length) return null;
  if (!value?.length) return null;
  return (
    <div className="section-padding wrapper">
      <div className="lg:px-32 2xl:px-40 3xl:px-60 font-sans">
        <PortableText value={value} components={components} />
      </div>
    </div>
  );
}
