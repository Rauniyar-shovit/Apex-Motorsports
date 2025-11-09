"use client";
import RevealWrapper from "@/components/reusable/RevealWrapper";
import Image from "next/image";
import React from "react";

const growDownAnimationVariants = {
  hidden: {
    opacity: 0,
    scaleY: 0,
    originY: 0,
  },
  visible: {
    opacity: 1,
    scaleY: 1,
    originY: 0,
  },
};

type ImageRevealProps = {
  isInView: boolean;
  imgSrc: string;
  imageAltText: string;
  imgStyles?: string;
  wrapperStyles?: string;
};
const ImageReveal = ({
  isInView,
  imgSrc,
  imageAltText,
  imgStyles,
  wrapperStyles,
}: ImageRevealProps) => {
    
  return (
    <RevealWrapper
      variants={growDownAnimationVariants}
      isInView={isInView}
      styles={`${wrapperStyles}`}
    >
      <Image
        src={imgSrc}
        alt={imageAltText}
        width={800}
        height={600}
        className={` w-full h-full object-cover grayscale xl:pt-5 ${imgStyles}`}
        sizes="100vw"
      />
    </RevealWrapper>
  );
};

export default ImageReveal;
