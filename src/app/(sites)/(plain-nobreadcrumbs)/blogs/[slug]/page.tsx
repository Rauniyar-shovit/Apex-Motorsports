import Image from "next/image";
import React from "react";
import BlogHeading from "./_components/BlogHeading";
import { client } from "@/sanity/lib/client";
import { BLOG_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import PortableContentRenderer from "./_components/ProtableContentRender";
import RelatedPosts from "./_components/RelatedPosts";
import { BlogPost } from "@/models";
import NoPosts from "@/components/reusable/NoPosts";

const Blog = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  let blog;
  try {
    blog = await client.fetch<BlogPost>(BLOG_BY_SLUG_QUERY, { slug });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return (
      <div className="wrapper py-20 text-center">
        <h2 className="text-2xl font-sans">Error loading blog</h2>
      </div>
    );
  }

  const blogMainImage = blog?.mainImage
    ? urlFor(blog.mainImage).url()
    : undefined;

  if (!blog) {
    return (
      <NoPosts containerStyles="!h-[100vh]" notFoundText="No Post Found" />
    );
  }

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
          categories={blog.categories}
          author={blog.authorName}
          date={blog.publishedAt}
          title={blog.title}
        />
      </div>

      <PortableContentRenderer value={blog.body} />
      <div className="wrapper ">
        <div className="lg:mx-32 2xl:mx-40 3xl:mx-60 bg-transparent my-14">
          <hr className=" lg:px-32 2xl:px-40 3xl:px-60  mt-4 h-[1px] border-0 bg-primary" />
        </div>
      </div>
      <RelatedPosts
        currentPostSlug={blog.slug?.current ?? ""}
        categories={blog.categories?.map((c) => c._id)}
      />
    </div>
  );
};

export default Blog;
