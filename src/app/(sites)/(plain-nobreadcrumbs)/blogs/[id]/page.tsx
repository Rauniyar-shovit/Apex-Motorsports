import Image from "next/image";
import React from "react";
import BlogHeading from "./_components/BlogHeading";
import { client } from "@/sanity/lib/client";
import { BLOG_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import PortableContentRenderer from "./_components/ProtableContentRender";

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
    </div>
  );
};

export default page;
