"use client";
import Image from "next/image";
import MarqueeContent from "./MarqueeContent";

const PARTNERS = [
  { name: "Mizuno", logo: "/sponsors/1.webp" },
  { name: "Asics", logo: "/sponsors/2.webp" },
  { name: "Adidas", logo: "/sponsors/3.webp" },
  { name: "Puma", logo: "/sponsors/4.webp" },
];

const MarqueePartners = () => {
  const renderMarqueeItem = (
    item: { name: string; logo: string },
    index: number
  ) => (
    <Image
      className="pr-12 "
      width={160}
      height={160}
      src={`${item.logo}`}
      key={index}
      alt="logo"
    />
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
