import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { RELATED_BLOGS } from "@/sanity/lib/queries";

async function RelatedPosts({
  currentPostSlug,
  categories: catIds = [],
}: {
  currentPostSlug: string;
  categories?: string[];
}) {

  
  const relatedPosts = await client.fetch(RELATED_BLOGS, {
    slug: currentPostSlug,
    catIds,
  });

  return (
    <section className="mt-16 section-padding wrapper lg:px-32 2xl:px-40 3xl:px-60 font-sans">
      <h2 className="text-2xl md:text-3xl font-barlow mb-10 uppercase">
        You May Also Like
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {relatedPosts.map((post) => {
          const blogMainImage = post.mainImage
            ? urlFor(post.mainImage).url()
            : undefined;

          return (
            <Link
              href={`/blog/${post.slug.current}`}
              key={post.slug.current}
              className="group block"
            >
              <div className="relative w-full h-56 md:h-64 overflow-hidden ">
                <Image
                  src={blogMainImage ? blogMainImage : ""}
                  alt="asd" //change
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 text-sm font-semibold uppercase text-muted-foreground">
                {post.categories[0].title}
              </p>
              <h3 className="mt-2 text-lg md:text-xl  leading-snug uppercase font-barlow">
                {post.title}
              </h3>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default RelatedPosts;
