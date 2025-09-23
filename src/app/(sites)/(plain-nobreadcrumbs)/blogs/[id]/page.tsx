import Image from "next/image";
import React from "react";
import BlogHeading from "./_components/BlogHeading";
import { client } from "@/sanity/lib/client";
import { BLOG_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import PortableContentRenderer from "./_components/ProtableContentRender";
import RelatedPosts from "./_components/RelatedPosts";

const relatedPosts = [
  {
    categories: [
      { _id: "4f47151f-d465-4fca-9473-214fb9743f87", title: "Running" },
    ],
    excerpt: null,
    mainImage: {
      alt: "race-track",
      asset: {
        url: "https://cdn.sanity.io/images/zy0u5ye3/production/d821a7b177bf25071a8c32d18638446a7bc3e1b3-1920x1080.jpg",
      },
    },
    publishedAt: "2025-09-21T07:16:00.000Z",
    slug: {
      _type: "slug",
      current: "science-of-high-performance-sportswear-and-shoes",
    },
    title: "The Science of High-Performance Sportswear & Shoes",
  },
  {
    categories: [
      { _id: "4f47151f-d465-4fca-9473-214fb9743f87", title: "Running" },
    ],
    excerpt: null,
    mainImage: {
      alt: "stretching",
      asset: {
        url: "https://cdn.sanity.io/images/zy0u5ye3/production/d821a7b177bf25071a8c32d18638446a7bc3e1b3-1920x1080.jpg",
      },
    },
    publishedAt: "2025-09-20T11:00:00.000Z",
    slug: {
      _type: "slug",
      current: "must-have-sportswear-for-every-fitness-enthusiast",
    },
    title: "Our Must-Have Sportswear for Every Fitness Enthusiast",
  },
];

const page = async () => {
  const blog = await client.fetch(BLOG_BY_SLUG_QUERY, {
    slug: "standard-discovering-the-perfect-running-gear-for-your-journey",
  });

  const blogMainImage = blog.mainImage
    ? urlFor(blog.mainImage).url()
    : undefined;

  console.log("blog page", blog.body);
  return (
    <div className="relative">
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] xl:h-[90vh] 3xl:h-[60vh]">
        {/* background main image */}
        {blogMainImage && (
          <Image
            src={blogMainImage}
            alt="Formula One cars"
            width={2880}
            height={1800}
            priority // preloads as LCP
            fetchPriority="high" // browser hint
            className=" absolute w-full h-full object-cover"
          />
        )}

        <div className="absolute w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] xl:h-[90vh] 3xl:h-[60vh]  z-20 bg-overlay opacity-25" />
        <BlogHeading
          category={blog.categories[0].title}
          author={blog.authorName}
          date={blog.publishedAt}
          title={blog.title}
        />
      </div>

      <PortableContentRenderer value={blog.body} />
      <RelatedPosts posts={relatedPosts} />
    </div>
  );
};

export default page;
