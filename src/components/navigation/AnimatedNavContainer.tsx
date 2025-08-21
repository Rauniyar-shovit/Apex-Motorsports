import { navbarLinks } from "@/data";
import { motion, MotionProps } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavbarLink from "./NavbarLink";

type AnimatedNavContainerProps = {
  motionProps?: Pick<
    MotionProps,
    "initial" | "animate" | "exit" | "variants" | "transition"
  >;
  navStyles?: string;
};

const AnimatedNavContainer = ({
  motionProps,
  navStyles,
}: AnimatedNavContainerProps) => {
  return (
    <motion.nav
      key="sticky"
      className={`hidden md:flex left-0 w-full h-20 z-30 items-center justify-between px-6 lg:px-20 will-change-transform ${navStyles}`}
      {...motionProps}
    >
      <Link href={"/"}>
        <Image
          src="/logo.png"
          width={120}
          height={120}
          alt="apex motosport logo"
        />
      </Link>
      <div className="flex items-center justify-center gap-4 font-barlow uppercase 2xl:text-lg">
        {navbarLinks.map((navLink, index) => (
          <NavbarLink title={navLink.title} link={navLink.link} key={index} />
        ))}
      </div>
    </motion.nav>
  );
};

export default AnimatedNavContainer;
