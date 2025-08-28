"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type SponsorFeatureProps = {
  logoSrc: string;
  logoAlt: string;
  name?: string;
  description: string;
  href?: string;
  index?: number; // <-- add index
};

export default function SponsorFeature({
  logoSrc,
  logoAlt,
  name,
  description,
  href,
  index = 0,
}: SponsorFeatureProps) {
  const isReversed = index % 2 === 1; // odd = reverse on lg+

  const Logo = (
    <div className="relative w-full h-32 md:h-40 lg:h-48 xl:h-56 2xl:h-64">
      <Image
        src={logoSrc}
        alt={logoAlt}
        fill
        className="h-auto object-contain"
      />
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-14 mb-20">
      {/* Logo */}
      <div className={`relative ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
        <div className="relative w-full">
          {href ? (
            <Link href={href} aria-label={name ?? logoAlt}>
              {Logo}
            </Link>
          ) : (
            Logo
          )}
        </div>
      </div>

      {/* Description */}
      <div
        className={`font-sans text-base md:text-lg leading-8 text-center lg:text-left ${
          isReversed ? "lg:order-1" : "lg:order-2"
        }`}
      >
        {description}
      </div>
    </div>
  );
}
