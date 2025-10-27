"use client";

import React from "react";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { BlockContentParagraph } from "@/sanity/types";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-4 leading-relaxed text-muted-primary">{children}</p>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      const href = value?.href || "#";
      const isExternal = href?.startsWith("http");
      return (
        <a
          href={href}
          target={isExternal ? "_blank" : "_self"}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-primary underline hover:text-primary/80 transition-colors"
        >
          {children}
        </a>
      );
    },
  },
};

export default function PortableParagraphRender({
  value,
}: {
  value: BlockContentParagraph | null;
}) {
  if (!value?.length) return null;

  return <PortableText value={value} components={components} />;
}
