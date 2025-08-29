import { Sponsor } from "@/models";
import Image from "next/image";
import React from "react";

const GoldSponsor = ({
  logoSrc,
  logoAlt,

  href,
}: Sponsor) => {
  const width = 320;
  const height = 160;

  const Logo = (
    <Image
      src={logoSrc}
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

export default GoldSponsor;
