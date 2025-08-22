import { SOCAILS } from "@/data";
import Link from "next/link";
import React, { CSSProperties } from "react";

const Socials = () => {
  return (
    <div>
      <h4 className="uppercase font-barlow font-[700] tracking-wide text-lg mb-6 md:text-xl">
        Get in touch
      </h4>
      <ul className="space-y-4">
        {SOCAILS.map(({ title, link, icon: Icon, color }) => (
          <li key={title}>
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={title}
              style={{ "--hover-color": color } as CSSProperties}
              className=" capitalize group inline-flex items-center gap-3"
            >
              <Icon className="h-5 w-5 text-white/80 transition-colors group-hover:[color:var(--hover-color)]" />
              <span className="font-sans text-white/80 group-hover:text-white transition-colors">
                {title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
