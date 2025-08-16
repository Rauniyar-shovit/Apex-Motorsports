import { navBarLinks } from "@/data/navbar";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { AnimatePresence, motion } from "motion/react";
import {
  linksContainerVariants,
  linkVariants,
  overlayVariants,
} from "@/animations/navbar";
import { usePathname } from "next/navigation";

const MobileNavbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="absolute top-0 left-0  w-full h-20 z-30 flex items-center justify-between bg-transparent px-6 lg:px-20 md:mt-4">
        <Link href={"/"}>
          <Image
            src="/logo.png"
            width={120}
            height={120}
            alt="apex motosport logo"
          />
        </Link>

        <div onClick={() => setIsNavbarOpen(true)} className="cursor-pointer">
          <IoMenuSharp className="h-8 w-8 text-white" />
        </div>
        <AnimatePresence>
          {isNavbarOpen && (
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-0 left-0 w-full h-screen bg-overlay z-40 flex items-center justify-center"
            >
              {/* Header reveals AFTER overlay, BEFORE links */}
              <div>
                <Link
                  href="/"
                  className="absolute top-8 left-8 z-50"
                  onClick={() => setIsNavbarOpen(false)}
                >
                  <Image
                    src="/logo.png"
                    width={120}
                    height={120}
                    alt="apex motosport logo"
                  />
                </Link>
                <div
                  onClick={() => setIsNavbarOpen(false)}
                  className="absolute flex gap-1 items-center top-8 right-8 z-50 group cursor-pointer text-white"
                >
                  <span className="font-sans text-sm">Close</span>
                  <IoCloseSharp className="h-8 w-8 group-hover:rotate-180 transition-all duration-300 " />
                </div>
              </div>

              {/* Links container staggers its children */}
              <motion.div
                variants={linksContainerVariants}
                className="flex flex-col items-center justify-center gap-4 font-barlow uppercase"
              >
                {navBarLinks.map((navLink) => (
                  <motion.div
                    key={navLink.link}
                    variants={linkVariants}
                    className="flex flex-col text-white"
                    onClick={() => setIsNavbarOpen(false)}
                  >
                    <Link
                      href={navLink.link}
                      className={` px-1 text-lg hover:scale-110 transition-all duration-300`}
                    >
                      {navLink.title.replace(/_/g, " ")}
                    </Link>
                    <div
                      className={`border-t-2 border-white ${
                        pathname === navLink.link ? "w-full" : "w-0"
                      }`}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default MobileNavbar;
