"use client";

import React, { useState, useTransition } from "react";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [term, setTerm] = useState(() => searchParams.get("query") ?? "");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = term.trim();

    // No clone needed; start with empty params
    const params = new URLSearchParams();
    if (trimmed) params.set("query", trimmed);

    const url = params.toString()
      ? `${pathname}?${params.toString()}`
      : pathname;
    router.push(url); // or router.replace(url)
  };

  return (
    <form onSubmit={onSubmit} className="lg:max-w-xs font-sans">
      <h2 className="text-2xl font-bold mb-4 font-barlow uppercase">SEARCH</h2>
      <div className="flex items-center border border-gray-300 px-4 py-2.5">
        <Search className="h-4.5 w-4.5 text-muted-primary" />
        <input
          type="text"
          placeholder="Search ..."
          className="ml-2 w-full bg-transparent outline-none placeholder-gray-400"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          aria-label="Search blogs"
        />
        {/* optional submit button; Enter works without this */}
        <button
          type="submit"
          className="sr-only"
          aria-label={isPending ? "Searching..." : "Search"}
        />
      </div>
    </form>
  );
};

export default SearchBar;
