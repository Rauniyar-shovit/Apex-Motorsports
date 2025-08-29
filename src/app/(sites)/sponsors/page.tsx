import React from "react";
import SponsorFeature from "./_components/Sponsors";
import Banner from "@/components/reusable/Banner";
import { SPONSORS } from "@/data";

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

      <Banner bannerText="Diamond level partners " />
      <div className="section-padding wrapper">
        {SPONSORS.map((sponsor, index) => (
          <SponsorFeature
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

      <Banner bannerText="Gold Level Partners" />
      <div className="section-padding wrapper">
        {/* <p className="text-primary font-sans text-center mb-20 text-4xl tracking-widest uppercase font-[700]">
          Diamond Level Partners
        </p> */}
        <SponsorFeature
          logoSrc="/sponsors/wsu.png"
          logoAlt="Charles Warman Foundation"
          name="Charles Warman Foundation"
          href="https://example.com" // optional
          description={`PTC (Parametric Technology Corporation) is a global software company that provides digital transformation solutions for industrial and manufacturing companies, enabling them to design, manufacture, and service physical products.`}
          index={0}
        />
        <SponsorFeature
          logoSrc="/sponsors/ptc.png"
          logoAlt="Charles Warman Foundation"
          name="Charles Warman Foundation"
          href="https://example.com" // optional
          description={`PTC (Parametric Technology Corporation) is a global software company that provides digital transformation solutions for industrial and manufacturing companies, enabling them to design, manufacture, and service physical products.`}
          index={1}
        />

        <SponsorFeature
          logoSrc="/sponsors/student-community.png"
          logoAlt="Charles Warman Foundation"
          name="Charles Warman Foundation"
          href="https://example.com" // optional
          description={`PTC (Parametric Technology Corporation) is a global software company that provides digital transformation solutions for industrial and manufacturing companies, enabling them to design, manufacture, and service physical products.`}
          index={2}
        />

        <SponsorFeature
          logoSrc="/sponsors/altium.png"
          logoAlt="Charles Warman Foundation"
          name="Charles Warman Foundation"
          href="https://example.com" // optional
          description={`PTC (Parametric Technology Corporation) is a global software company that provides digital transformation solutions for industrial and manufacturing companies, enabling them to design, manufacture, and service physical products.`}
          index={3}
        />
      </div>
    </main>
  );
};

export default page;
