import RevealWrapper from "@/components/reusable/RevealWrapper";
import { ABOUT_US } from "@/data";
import Image from "next/image";
import PrimaryPanel from "./PrimaryPanel";
import SecondaryPanel from "./SecondaryPanel";
import WhoWeAreQuote from "./WhoWeAreQuote";

const AboutUs = () => {
  return (
    <section className="relatives sm:pt-10 md:pt-24 xl:pt-32;">
      <RevealWrapper
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3  md:[grid-template-rows:auto_auto] items-start">
          <PrimaryPanel {...ABOUT_US.primaryTile} />

          {/* secondary image */}
          <div className=" md:row-start-2 md:col-start-1  md:col-span-1 relative 2xl:min-h-[430px] 3xl:min-h-[480px] h-[300px] md:h-full w-full">
            <Image
              src={ABOUT_US.secondaryTile.image}
              fill
              alt={"club activity"}
              objectFit="cover"
            />
          </div>

          <SecondaryPanel {...ABOUT_US.secondaryTile} />

          {/* primary image */}
          <div className=" md:row-span-full md:col-start-3  md:col-span-1 relative  h-full w-full">
            <Image
              src={ABOUT_US.primaryTile.image}
              fill
              alt={"potrait shot apex motorsport"}
              objectFit="cover"
            />
          </div>
        </div>
      </RevealWrapper>

      <WhoWeAreQuote {...ABOUT_US.quoteInfo} />
    </section>
  );
};

export default AboutUs;
