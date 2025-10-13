import { SearchX } from "lucide-react";
import React from "react";
const NotFound = ({
  containerStyles,
  notFoundText = "No Posts Found",
}: {
  containerStyles?: string;
  notFoundText?: string;
}) => {
  return (
    <div
      className={`flex flex-1 w-full items-center justify-center min-h-[40vh] h-full gap-4 ${containerStyles}`}
    >
      <SearchX className="h-20 w-20 lg:h-25 lg:w-25  text-foreground" />
      <p className="font-barlow text-xl lg:text-3xl uppercase  text-primary">
        {notFoundText}
      </p>
    </div>
  );
};

export default NotFound;
