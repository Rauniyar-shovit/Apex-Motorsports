"use client";
import ParallaxContainer from "@/components/features/achievements/ParallaxContainer";
import Banner from "@/components/reusable/Banner";
import { DIAMOND_SPONSORS, GOLD_SPONSORS, SILVER_SPONSORS } from "@/data";
import DiamondSponsor from "./_components/DiamondSponsor";
import PartnershipBanner from "./_components/PartnershipBanner";
import SponsorBrand from "./_components/SponsorBrand";
import { useEffect } from "react";
import Lenis from "lenis";

const SponsorsPage = () => {
  useEffect(() => {
    const lenis = new Lenis();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

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

      <section className="mt-20">
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

      <ParallaxContainer
        bgImagePath="/race-track.jpg"
        bgImageTitle="f1 sponsored"
      />

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

      <ParallaxContainer
        bgImagePath="/mclaren-f1-car.webp"
        bgImageTitle="f1 sponsored"
      />

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

      <ParallaxContainer
        bgImagePath="/race-finish.jpg"
        bgImageTitle="f1 sponsored"
      />

      <section className="mt-20">
        <Banner bannerText="Supporters" />
        <div className="section-padding wrapper mb-20">
          <div className="flex  flex-wrap   items-center justify-center gap-16 justify-items-center ">
            {SILVER_SPONSORS.map((sponsor, index) => (
              <SponsorBrand {...sponsor} key={index} />
            ))}
          </div>
        </div>
      </section>

      <ParallaxContainer
        bgImagePath="/mercedes-team.jpg"
        bgImageTitle="f1 sponsored"
        containerStyles={"-mb-20 md:-mb-24 xl:-mb-32"}
      >
        <PartnershipBanner />
      </ParallaxContainer>
    </main>
  );
};

export default SponsorsPage;
