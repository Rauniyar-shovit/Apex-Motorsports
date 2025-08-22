import { footerLinks } from "@/data";
import Link from "next/link";
import React from "react";

const FooterLinks = () => {
  return (
    <div>
      <h4 className="uppercase font-barlow font-[700] tracking-wide text-lg mb-6 md:text-xl md:px-4">
        Links
      </h4>
      <ul className="space-y-4">
        {footerLinks.map(({ title, link }, index) => (
          <li
            key={index}
            className="group relative transition-transform duration-300 ease-out hover:translate-x-3 cursor-pointer  md:px-4"
          >
            <Link
              href={link}
              className=" capitalize relative inline-block font-sans text-white transition-colors duration-300 group-hover:text-white
               after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
               after:h-[1px] after:w-0 after:bg-white after:transition-[width] after:duration-300 after:ease-out
               group-hover:after:w-full"
            >
              {title.replace("_", " ")}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
