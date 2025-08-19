"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

type NavbarLinkProps = {
  link: string;
  title: string;
};

const NavbarLink = ({ link, title }: NavbarLinkProps) => {
  const [hovered, setHovered] = useState(false);
  const pathname = usePathname();
  const isActive = pathname === link;

  const modifiedTitle = title.replace(/_/g, " ");

  return (
    <motion.div
      className="flex flex-col"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <Link href={link} className="px-1 text-lg text-white">
        {modifiedTitle}
      </Link>
      <div
        className={`border-t-2 border-white ${
          hovered || isActive ? "w-full" : "w-0"
        } transition-all duration-200`}
      />
    </motion.div>
  );
};

export default NavbarLink;
