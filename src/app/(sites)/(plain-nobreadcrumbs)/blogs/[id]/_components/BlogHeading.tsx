import { Dot, User } from "lucide-react";
import React from "react";
import { format } from "date-fns";
type BlogHeadingProps = {
  category: string;
  title: string;
  date: string;
  author: string;
};

const BlogHeading = ({ category, title, date, author }: BlogHeadingProps) => {
  const formatted = format(new Date(date), "dd MMM yyyy");
  return (
    <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center text-white px-6">
      {/* Category */}
      <span className="bg-primary text-white text-xs font-sans px-3 py-1  mb-4 uppercase">
        {category}
      </span>

      {/* Title */}
      <h1 className="font-barlow text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold leading-tight max-w-xl lg:max-w-2xl   xl:max-w-3xl  uppercase">
        {title}
      </h1>

      {/* Author info */}
      <div className="mt-6 flex items-center gap-2 font-sans text-sm text-gray-200 ">
        <div className="flex gap-3 items-center justify-center">
          <div className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center bg-muted-primary">
            <User className="w-6 h-6 text-white" />
          </div>

          <span className="uppercase font-[600] tracking-wider">{author}</span>
        </div>
        <Dot />
        <span> {formatted}</span>
      </div>
    </div>
  );
};

export default BlogHeading;
