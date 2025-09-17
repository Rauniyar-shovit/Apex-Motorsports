import { Sponsor } from "@/models";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";

const SponsorBrand = ({ logoSrc, logoAlt, href }: Sponsor) => {
  const width = 320;
  const height = 160;

  const imageLogo = logoSrc ? urlFor(logoSrc).url() : undefined;

  const Logo = imageLogo && logoAlt && (
    <Image
      src={imageLogo}
      alt={logoAlt}
      width={width}
      height={height}
      className="object-contain max-h-40 "
    />
  );
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {Logo}
    </a>
  ) : (
    Logo
  );
};

export default SponsorBrand;
