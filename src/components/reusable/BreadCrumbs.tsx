"use client";
import { LINKS } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Fragment } from "react";

export const BreadCrumbs = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const formatSegment = (segment: string) => segment.replace(/[-_]/g, " ");

  return (
    <section className="relative bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-28 2xl:py-32 text-center">
        <h1 className="font-barlow text-4xl sm:text-5xl md:text-[3.45rem] 2xl:text-6xl uppercase tracking-relaxed">
          {segments[segments.length - 1]
            ? formatSegment(segments[segments.length - 1])
            : "Home"}
        </h1>

        {/* Breadcrumb */}
        <nav className="mt-6 font-sans">
          <ol className="flex items-center justify-center gap-2 text-sm font-semibold tracking-wider uppercase">
            <li>
              <Link
                href={"/"}
                className="relative after:content-[''] after:absolute after:left-1/2 after:-bottom-1 
                  after:h-[1.5px] after:w-0 after:bg-white after:-translate-x-1/2
                  after:transition-all after:duration-300 hover:after:w-full"
              >
                {LINKS.HOME}
              </Link>
            </li>

            {segments.map((segment, i) => {
              const href = "/" + segments.slice(0, i + 1).join("/");
              const isLast = i === segments.length - 1;

              return (
                <Fragment key={i}>
                  <li>/</li>
                  <li>
                    {isLast ? (
                      <span className="text-white">
                        {formatSegment(segment)}
                      </span>
                    ) : (
                      <Link
                        href={href}
                        className="relative after:content-[''] after:absolute after:left-1/2 after:-bottom-1 
                          after:h-[1.5px] after:w-0 after:bg-white after:-translate-x-1/2
                          after:transition-all after:duration-300 hover:after:w-full"
                      >
                        {formatSegment(segment)}
                      </Link>
                    )}
                  </li>
                </Fragment>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
};
