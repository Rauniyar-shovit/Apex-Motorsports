"use client";
import { Categories } from "@/models";
import { Dot } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const CategoriesClient = ({ categories }: { categories: Categories[] }) => {
  const params = useSearchParams();
  const selected = params.get("category") || "";

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 font-barlow uppercase">
        Categories
      </h2>
      <ul className="space-y-2 text-base font-sans">
        {categories.map((category) => (
          <li key={category.slug}>
            <Link
              href={`/blogs?category=${category.slug}`}
              className={"flex items-center text-foreground "}
            >
              <Dot className="mr-2 h-8 w-8" />
              <span
                className={`hover:text-primary ${selected === category.slug ? "text-primary" : ""}`}
              >
                {category.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesClient;
