import React from "react";

import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { RECENT_BLOGS_QUERY } from "@/sanity/lib/queries";
import { format } from "date-fns";
import { urlFor } from "@/sanity/lib/image";

const RecentPosts = async () => {
  const recentPosts = await client.fetch(RECENT_BLOGS_QUERY);
  
  // console.log("🚀 ~ RecentPosts ~ recentPosts:", recentPosts);

  return (
    <aside className="w-full">
      <h2 className="text-2xl font-bold mb-4 font-barlow uppercase">
        Recent Posts
      </h2>

      <ul className="space-y-8">
        {recentPosts.map((post) => {
          const formattedDate = format(
            new Date(post.publishedAt),
            "dd MMM yyyy"
          );

          return (
            <li
              key={post._id}
              className="flex items-center justify-cente gap-6"
            >
              {/* Thumbnail */}
              <Link
                href={`/blogs/${post.slug}`}
                className="relative block h-22 w-22 shrink-0 overflow-hidden"
              >
                <Image
                  src={urlFor(post.mainImage).url()}
                  alt={post.title}
                  fill
                  sizes="64px"
                  className="object-cover hover:scale-110 transition-all duration-200"
                  priority
                />
              </Link>

              {/* Meta + Title */}
              <div className="min-w-0 text-sm font-sans">
                <div className="mb-2">
                  <span className="tracking-widest uppercase font-[600] ">
                    {post.authorName}
                  </span>
                  <span className="mx-2 select-none text-muted-primary">•</span>
                  <time
                    dateTime={post.publishedAt}
                    className="text-muted-primary"
                  >
                    {formattedDate}
                  </time>
                </div>

                <Link
                  href={post.slug}
                  className="mt-1 block text-xl font-barlow font-extrabold leading-snug uppercase  line-clamp-2 hover:text-muted-primary transition duration-150"
                  title={post.title}
                >
                  {post.title}
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default RecentPosts;
