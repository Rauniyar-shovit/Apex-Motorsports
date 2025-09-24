import { Dot } from "lucide-react";
import React from "react";

type Category = {
  name: string;
  href: string;
};

const categories: Category[] = [
  { name: "Data Acquistion", href: "/category/club" },
  { name: "Team", href: "/category/fundraising" },
  { name: "Sponsor", href: "/category/running" },
  { name: "Car", href: "/category/standard" },
  { name: "Manufacturing", href: "/category/standard" },
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
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
