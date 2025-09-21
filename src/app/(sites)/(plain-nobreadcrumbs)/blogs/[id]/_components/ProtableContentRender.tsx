"use client";

import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const url = urlFor(value).fit("max").url();
      const alt = value?.alt || "Image";
      return (
        <figure className="my-6">
          <Image
            src={url}
            alt={alt}
            width={1200}
            height={675}
            className="w-full h-auto rounded-xl object-cover"
          />
          {value?.caption && (
            <figcaption className="mt-2 text-sm text-muted-foreground">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    code: ({ value }) => (
      <pre className="my-4 overflow-x-auto rounded-xl bg-muted p-4 text-sm">
        <code>{value.code}</code>
      </pre>
    ),
  },
  block: {
    h2: ({ children }) => (
      <h2 className="mt-10 mb-3 text-2xl font-bold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 mb-2 text-xl font-semibold">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 pl-4 italic opacity-90">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => <p className="my-4 leading-7">{children}</p>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-4 list-disc pl-6 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="my-4 list-decimal pl-6 space-y-2">{children}</ol>
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
          className="underline underline-offset-2"
        >
          {children}
        </a>
      );
    },
    code: ({ children }) => (
      <code className="rounded bg-muted px-1 py-0.5 text-sm">{children}</code>
    ),
  },
};

export default function PortableContentRenderer({ value }: { value: any }) {
  if (!value?.length) return null;
  return (
    <div className="section-padding wrapper">
      <div className="lg:px-32 2xl:px-40 3xl:px-60 font-sans">
        <PortableText value={value} components={components} />
      </div>
    </div>
  );
}
