import { client } from "@/sanity/lib/client";
import { CATEGORY_QUERY } from "@/sanity/lib/queries";
import { Dot } from "lucide-react";
import React from "react";

const Categories = async () => {
  const categories = await client.fetch(CATEGORY_QUERY);
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 font-barlow uppercase">
        Categories
      </h2>
      <ul className="space-y-2 text-base font-sans">
        {categories.map((category) => (
          <li key={category.slug}>
            <a
              href={`/blogs?category=${category.slug}`}
              className="flex items-center text-foreground "
            >
              <Dot className="mr-2 h-8 w-8" />
              <span className="hover:text-primary">{category.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
