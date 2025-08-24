"use client";

import Image from "next/image";
import DarkPanel from "./DarkPanel";
import InfoSection from "./InfoSection";

export default function WhoAreWe() {
  return (
    <section className="relative section-padding">
      {/* Top row */}
      <div className="grid grid-cols-1 md:grid-cols-3  md:grid-rows-2 items-start">
        <InfoSection />

        <div className=" md:row-start-2 md:col-start-1  md:col-span-1 relative bg-red-500 h-full w-full">
          <Image
            src={"/engineering-kart.avif"}
            width={700}
            height={800}
            alt="model"
            objectFit="cover"
          />
        </div>

        <DarkPanel />
        <div className=" md:row-span-full md:col-start-3  md:col-span-1 relative bg-red-500 h-full w-full">
          <Image
            src={"/model.avif"}
            // width={500}
            // height={1000}
            fill
            alt="model"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
}
