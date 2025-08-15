"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavbarLink from "./NavbarLink";
import { navBarLinks } from "@/data/navbar";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0  w-full h-20 z-30 flex items-center justify-between bg-transparent px-6 lg:px-20 md:mt-4">
      <Link href={"/"}>
        <Image
          src="/logo.png"
          width={120}
          height={120}
          alt="apex motosport logo"
        />
      </Link>
      <div className="flex items-center justify-center gap-4 font-barlow uppercase 2xl:text-lg">
        {navBarLinks.map((navLink, index) => (
          <NavbarLink
            title={navLink.title}
            link={navLink.link}
            key={index}
            index={index}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
