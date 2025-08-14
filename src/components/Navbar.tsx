import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0  w-full h-20 z-30 flex items-center justify-between bg-transparent px-6 md:px-20 md:mt-4">
      <Link href={"/"}>
        <Image
          src="/logo.png"
          width={120}
          height={120}
          alt="apex motosport logo"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
