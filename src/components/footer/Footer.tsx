// src/components/layout/Footer.tsx

import { BRAND_NAME } from "@/constants";
import { footerLinks, navbarLinks, SOCAILS } from "@/data";
import Link from "next/link";
import { CSSProperties } from "react";
import { FaRegCopyright } from "react-icons/fa6";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Shop", href: "/shop" },
  { label: "Contacts", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="section-padding">
      <div className="bg-foreground text-white py-10 lg:pt-24">
        <div className="wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
            {/* 1) Blurb */}
            <div>
              <h4 className="uppercase font-barlow tracking-wide text-lg md:text-xl mb-4">
                {BRAND_NAME}
              </h4>
              <p className="font-sans text-muted-secondary leading-relaxed">
                Made to learn, Built to win
              </p>
            </div>

            {/* 2) Office */}
            <div>
              <h4 className="uppercase font-barlow font-[700] tracking-wide text-lg mb-6 md:text-xl">
                Office
              </h4>

              <p className="font-sans text-muted-secondary leading-relaxed mb-6">
                Germany —
                <br />
                785 15h Street, Office 478
                <br />
                Berlin, De 81566
              </p>

              {/* Email with center-growing underline */}
              <Link
                href="mailto:info@email.com"
                className="group font-sans inline-block relative text-white mb-6
             after:content-[''] after:absolute after:left-0 after:-bottom-1
             after:h-[1px] after:w-full after:bg-white
             after:origin-left after:duration-300 after:ease-out
             after:transition-all hover:after:w-0"
              >
                info@email.com
              </Link>

              <p className="font-barlow text-lg md:text-xl font-[700] mt-6">
                +1 800 555 25 69
              </p>
            </div>

            {/* 3) Links */}
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

            {/* 4) Socials */}
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
          </div>

          <div className="mt-12 border-t-[1px] border-muted-primary pt-6  text-muted-secondary flex gap-1 items-center font-sans ">
            {BRAND_NAME} <FaRegCopyright />
            {new Date().getFullYear()}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
