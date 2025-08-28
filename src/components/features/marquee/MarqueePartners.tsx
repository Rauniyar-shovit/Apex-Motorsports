"use client";
import Image from "next/image";
import MarqueeContent from "./MarqueeContent";

const PARTNERS = [
  { name: "Adidas", logo: "/sponsors/wsu.png" },
  { name: "Mizuno", logo: "/sponsors/ptc.png" },
  { name: "Puma", logo: "/sponsors/altium.png" },
  { name: "Asics", logo: "/sponsors/student-community.png" },
];

const MarqueePartners = () => {
  const renderMarqueeItem = (
    item: { name: string; logo: string },
    index: number
  ) => (
    <div className="relative w-[180px] h-[180px]">
      <Image
        src={`${item.logo}`}
        key={index}
        className="absolute top-0 left-0 w-full h-full object-contain pr-12"
        fill
        alt="logo"
      />
    </div>
  );

  return (
    <section className="wrapper section-padding">
      <div className="flex flex-col justify-center lg:flex-row-reverse items-center gap-3 md:gap-5">
        <h2 className=" font-barlow uppercase text-2xl sm:text-3xl leading-snug flex-1/3 text-center">
          Our Top Industry Partners
        </h2>

        {/* Logos Row (responsive) */}
        <div className="flex items-center justify-center overflow-hidden  py-8 lg:mx-10">
          <div className="flex">
            {[0, 0, 0].map((_, index) => (
              <MarqueeContent
                content={PARTNERS}
                renderItem={renderMarqueeItem}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueePartners;
