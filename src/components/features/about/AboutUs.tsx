"use client";

import { ABOUT_US } from "@/data";
import Image from "next/image";
import PrimaryPanel from "./PrimaryPanel";
import SecondaryPanel from "./SecondaryPanel";

const AboutUs = () => {
  return (
    <section className="relative section-padding">
      <div className="grid grid-cols-1 md:grid-cols-3  md:[grid-template-rows:auto_auto] items-start">
        <PrimaryPanel {...ABOUT_US.primaryTile} />

        {/* secondary image */}
        <div className=" md:row-start-2 md:col-start-1  md:col-span-1 relative bg-red-500 2xl:min-h-[430px] 3xl:min-h-[480px] h-[300px] md:h-full w-full">
          <Image
            src={ABOUT_US.secondaryTile.image}
            fill
            alt="model"
            objectFit="cover"
          />
        </div>

        <SecondaryPanel {...ABOUT_US.secondaryTile} />

        {/* primary image */}
        <div className=" md:row-span-full md:col-start-3  md:col-span-1 relative bg-red-500 h-full w-full">
          <Image
            src={ABOUT_US.primaryTile.image}
            fill
            alt="model"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
