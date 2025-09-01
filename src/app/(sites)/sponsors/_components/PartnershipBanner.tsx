"use client";
import Button from "@/components/reusable/Button";
import { BRAND_DETAILS } from "@/constants";
import { useRouter } from "next/navigation";
import React from "react";
const PartnershipBanner = () => {
  const router = useRouter();
  return (
    <div className="font-sans">
      <div className="flex flex-col items-center justify-center text-center max-w-3xl  px-12 md:px-4 py-12 bg-foreground wrapper gap-5   [clip-path:polygon(6%_0,100%_0,94%_100%,0_100%)]">
        <p className="uppercase text-sm font-[600] tracking-wider  ">
          Support {BRAND_DETAILS.name}
        </p>

        {/* Headline */}
        <h1 className=" font-barlow font-extrabold uppercase leading-[1.05] text-4xl md:text-5xl ">
          <span className="text-primary"> HELP US </span>
          FUEL OUR JOURNEY
        </h1>

        {/* CTA */}
        <Button
          handleClick={() => {
            router.push("/contacts");
          }}
          btnStyles={
            "border border-white bg-foreground hover:text-foreground px-8 py-4  tracking-widest text-white md:mt-6"
          }
          beforeStyles={"before:bg-background "}
          title={"Partner With Us"}
        />
      </div>
    </div>
  );
};

export default PartnershipBanner;
