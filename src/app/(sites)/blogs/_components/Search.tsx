import React from "react";
import { Search } from "lucide-react";
const SearchBar = () => {
  return (
    <div className=" max-w-xs font-sans">
      <h2 className="text-2xl font-bold mb-4 font-barlow">SEARCH</h2>
      <div className="flex items-center border border-gray-300  px-4 py-2.5">
        <Search className="h-4.5 w-4.5 text-muted-primary " />
        <input
          type="text"
          placeholder="Search ..."
          className="ml-2 w-full bg-transparent outline-none placeholder-gray-400"
        />
      </div>
    </div>
  );
};

export default SearchBar;
