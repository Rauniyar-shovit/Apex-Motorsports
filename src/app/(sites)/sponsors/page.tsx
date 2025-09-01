import ParallaxContainer from "@/components/features/achievements/ParallaxContainer";
import Banner from "@/components/reusable/Banner";
import { Sponsor } from "@/models";
import { client } from "@/sanity/lib/client";
import { TIER_SPONSORS_QUERY } from "@/sanity/lib/queries";
import DiamondSponsor from "./_components/DiamondSponsor";
import PartnershipBanner from "./_components/PartnershipBanner";
import SmoothScroll from "./_components/SmoothScroll";
import SponsorBrand from "./_components/SponsorBrand";

const SponsorsPage = async () => {
  const diamondSponsors: Sponsor[] = await client.fetch(TIER_SPONSORS_QUERY, {
    tier: "diamond",
  });
  const goldSponsors: Sponsor[] = await client.fetch(TIER_SPONSORS_QUERY, {
    tier: "gold",
  });
  const silverSponsors: Sponsor[] = await client.fetch(TIER_SPONSORS_QUERY, {
    tier: "silver",
  });
  const supporters: Sponsor[] = await client.fetch(TIER_SPONSORS_QUERY, {
    tier: "supporter",
  });

  return (
    <>
      <SmoothScroll />
      <main>
        <section className="px-6 py-16">
          <div className="font-sans max-w-4xl 2xl:max-w-5xl mx-auto text-center">
            <p className="uppercase text-sm font-[600] tracking-wider mb-4 ">
              Fueling our Journey
            </p>
            <p className=" font-sans text-center  text-base md:text-lg leading-relaxed">
              Apex Motorsport is proud to be powered by the support of our
              incredible sponsors. Their commitment fuels our ability to
              innovate, compete, and grow, ensuring our team continues to push
              the boundaries of student motorsport. Every achievement on and off
              the track is a testament to their contribution.
            </p>
          </div>
          <div className="mt-6 border-b-2 border-primary w-40 mx-auto" />
        </section>

        <section className="mt-20">
          <Banner bannerText="Diamond Tier sponsors " />
          <div className="section-padding wrapper  ">
            {diamondSponsors.map((sponsor: Sponsor, index) => (
              <DiamondSponsor {...sponsor} index={index} key={sponsor._id} />
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
              {goldSponsors.map((sponsor: Sponsor, index) => (
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
              {silverSponsors.map((sponsor, index) => (
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
              {supporters.map((sponsor, index) => (
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
    </>
  );
};

export default SponsorsPage;
