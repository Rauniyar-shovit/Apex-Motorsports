import { Dot } from "lucide-react";
import React from "react";
type Category = {
  name: string;
  count: number;
  href: string;
};
const categories: Category[] = [
  { name: "Club", count: 3, href: "/category/club" },
  { name: "Fundraising", count: 4, href: "/category/fundraising" },
  { name: "Running", count: 9, href: "/category/running" },
  { name: "Standard", count: 6, href: "/category/standard" },
];
const Categories = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 font-barlow uppercase">
        Categories
      </h2>

      <ul className="space-y-2 text-base font-sans">
        {categories.map((cat) => (
          <li key={cat.name}>
            <a href={cat.href} className="flex items-center text-foreground ">
              <Dot className="mr-2 h-8 w-8" />
              <span className="hover:text-primary">{cat.name}</span>
              <span className="ml-1 ">({cat.count})</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
