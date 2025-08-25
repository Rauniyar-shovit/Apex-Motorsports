"use client";
import RevealWrapper from "@/components/Reusable/RevealWrapper";
import { BRAND_DETAILS } from "@/constants";
import { SOCAILS } from "@/data";
import Link from "next/link";
import React from "react";

const ContactInfo = () => {
  return (
    <div className="flex-1 w-full md:items-center">
      <RevealWrapper
        variants={{
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="md:pl-4 lg:pl-10 xl:pl-18">
          <p className="uppercase font-sans font-[600] text-sm tracking-wider mb-4">
            Contact us
          </p>
          <p className="uppercase font-barlow font-[600] text-3xl md:text-4xl lg:text-5xl mb-6 ">
            Have Questions?
            <br />
            Get in Touch!
          </p>
          <p className="font-sans  mb-6 text-muted-primary">
            {BRAND_DETAILS.address.streetName}, {BRAND_DETAILS.address.building}
            <br />
            {BRAND_DETAILS.address.shuburb}, {BRAND_DETAILS.address.postcode}
          </p>

          <p
            className="font-sans mb-6 text-muted-primary inline-block relative 
   after:content-[''] after:absolute after:left-1/2 after:-bottom-1 
   after:h-[1.5px] after:w-0  after:bg-black after:-translate-x-1/2
   after:transition-all after:duration-300 hover:after:w-full"
          >
            {BRAND_DETAILS.email}
          </p>

          <p className="font-barlow text-xl lg:text-2xl text-foreground mb-10 ">
            {BRAND_DETAILS.phone}
          </p>

          <div className="flex gap-2">
            {SOCAILS.map(({ title, icon: Icon, link, color }) => (
              <Link
                key={title}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ "--hover-color": color } as React.CSSProperties}
                className="p-3 flex items-center justify-center border border-muted-secondary group"
              >
                <Icon className="md:text-lg transition-colors duration-300 text-foreground group-hover:[color:var(--hover-color)]" />
              </Link>
            ))}
          </div>
        </div>
      </RevealWrapper>
    </div>
  );
};

export default ContactInfo;
