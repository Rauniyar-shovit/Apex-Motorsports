import { Dot, User } from "lucide-react";
import React from "react";

const BlogHeading = () => {
  return (
    <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center text-white px-6">
      {/* Category */}
      <span className="bg-blue-600 text-white text-xs font-sans px-3 py-1  mb-4">
        STANDARD
      </span>

      {/* Title */}
      <h1 className="font-barlow text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold leading-tight">
        DISCOVERING THE PERFECT <br />
        RUNNING GEAR FOR YOUR JOURNEY
      </h1>

      {/* Author info */}
      <div className="mt-6 flex items-center gap-2 font-sans text-sm text-gray-200 ">
        <div className="flex gap-3 items-center justify-center">
          <div className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center bg-muted-primary">
            <User className="w-6 h-6 text-white" />
          </div>

          <span className="uppercase font-[600] tracking-wider">
            PETER BOWMAN
          </span>
        </div>
        <Dot />
        <span> Mar 19, 2025</span>
      </div>
    </div>
  );
};

export default BlogHeading;
