import Image from "next/image";
import React from "react";
import BlogHeading from "./_components/BlogHeading";
const post = {
  title: "Discovering the Perfect Running Gear for Your Journey",
  comments: 0,
  date: "14 September 2025",
  excerpt:
    "Qroin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in consequat. Fusce sodales augue a accumsan. Cras sollicitudin, ipsum eget blandit pulvinar.",
  href: "/blogs/discover-perfect-running-gear",
  image: "/blog.jpg", // put your image under /public
};
const page = () => {
  return (
    <div className="relative">
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] xl:h-[90vh] 3xl:h-[60vh]">
        {/* background main image */}
        <Image
          src={post.image}
          alt="Formula One cars"
          width={2880}
          height={1800}
          priority // preloads as LCP
          fetchPriority="high" // browser hint
          className=" absolute w-full h-full object-cover"
        />

        <div className="absolutew-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] xl:h-[90vh] 3xl:h-[60vh]  z-20 bg-overlay opacity-25" />
      </div>
      <BlogHeading />
    </div>
  );
};

export default page;
