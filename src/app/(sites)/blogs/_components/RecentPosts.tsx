import React from "react";

import Image from "next/image";
import Link from "next/link";

type Post = {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string; // ISO or readable
  image: string; // /public path or full URL
};

const RECENT_POSTS: Post[] = [
  {
    id: "1",
    title: "Discovering the Perfect Running Gear for Your Journey",
    slug: "/blog/discover-perfect-running-gear",
    category: "Standard",
    date: "2025-03-19",
    image: "/thumbs/running.jpg",
  },
  {
    id: "2",
    title: "The Anatomy of Cutting-Edge Sportswear Technology",
    slug: "/blog/anatomy-of-cutting-edge-sportswear",
    category: "Standard",
    date: "2025-03-19",
    image: "/thumbs/sportswear.jpg",
  },
];

function formatDate(d: string) {
  const dt = new Date(d);
  if (Number.isNaN(dt.getTime())) return d;
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(dt);
}
const RecentPosts = ({ posts = RECENT_POSTS }) => {
  return (
    <aside className="w-full">
      <h2 className="text-2xl font-bold mb-4 font-barlow uppercase">
        Recent Posts
      </h2>

      <ul className="space-y-8">
        {posts.map((p) => (
          <li key={p.id} className="flex items-center justify-cente gap-6">
            {/* Thumbnail */}
            <Link
              href={p.slug}
              className="relative block h-22 w-22 shrink-0 overflow-hidden"
            >
              <Image
                src={"/blog.jpg"}
                alt={p.title}
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
                  {p.category}
                </span>
                <span className="mx-2 select-none text-muted-primary">•</span>
                <time dateTime={p.date} className="text-muted-primary">
                  {formatDate(p.date)}
                </time>
              </div>

              <Link
                href={p.slug}
                className="mt-1 block text-lg font-barlow font-extrabold leading-relaxed uppercase  line-clamp-2"
                title={p.title}
              >
                {p.title}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default RecentPosts;
