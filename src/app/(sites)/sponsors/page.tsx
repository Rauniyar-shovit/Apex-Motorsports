"use client";
import Banner from "@/components/reusable/Banner";
import { DIAMOND_SPONSORS, GOLD_SPONSORS, SILVER_SPONSORS } from "@/data";
import DiamondSponsor from "./_components/DiamondSponsor";
import SponsorBrand from "./_components/SponsorBrand";
import Image from "next/image";
import ParallaxContainer from "@/components/features/achievements/ParallaxContainer";

const page = () => {
  return (
    <main>
      <section className="px-6 py-16">
        <div className="font-sans max-w-4xl 2xl:max-w-5xl mx-auto text-center">
          <p className="uppercase text-sm font-[600] tracking-wider mb-4 ">
            Fueling our Journey
          </p>
          <p className=" font-sans text-center  text-base md:text-lg leading-relaxed">
            Apex Motorsport is proud to be powered by the support of our
            incredible sponsors. Their commitment fuels our ability to innovate,
            compete, and grow, ensuring our team continues to push the
            boundaries of student motorsport. Every achievement on and off the
            track is a testament to their contribution.
          </p>
        </div>
        <div className="mt-6 border-b-2 border-primary w-40 mx-auto" />
      </section>

      <ParallaxContainer />

      <section>
        <Banner bannerText="Diamond Tier sponsors " />
        <div className="section-padding wrapper  ">
          {DIAMOND_SPONSORS.map((sponsor, index) => (
            <DiamondSponsor
              key={index}
              logoSrc={sponsor.logoSrc}
              logoAlt={sponsor.logoAlt}
              name={sponsor.name}
              href={sponsor.href}
              description={sponsor.description}
              index={index}
            />
          ))}
        </div>
      </section>

      <ParallaxContainer />

      <section className="mt-20">
        <Banner bannerText="Gold Tier Sponsors" />
        <div className="section-padding wrapper mb-20">
          <div className="flex  flex-wrap   items-center justify-center gap-16 justify-items-center ">
            {GOLD_SPONSORS.map((sponsor, index) => (
              <SponsorBrand {...sponsor} key={index} />
            ))}
          </div>
        </div>
      </section>

      <ParallaxContainer />

      <section className="mt-20">
        <Banner bannerText="Silver Tier Sponsors" />
        <div className="section-padding wrapper mb-20">
          <div className="flex  flex-wrap   items-center justify-center gap-16 justify-items-center ">
            {SILVER_SPONSORS.map((sponsor, index) => (
              <SponsorBrand {...sponsor} key={index} />
            ))}
          </div>
        </div>
      </section>

      <ParallaxContainer />
    </main>
  );
};

export default page;
