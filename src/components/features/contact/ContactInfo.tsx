"use client";
import RevealWrapper from "@/components/reusable/RevealWrapper";
import { BRAND_DETAILS } from "@/constants";
import { SOCAILS } from "@/data";
import { Mail, MapPin, Smartphone } from "lucide-react";
import Link from "next/link";
import React from "react";

type ContactInfoProps = {
  containerStyles?: string;
  titleStyles?: string;
};

const ContactInfo = ({
  containerStyles,
  titleStyles = "text-3xl md:text-4xl lg:text-5xl",
}: ContactInfoProps) => {
  return (
    <div className="flex-1 w-full md:items-center">
      <RevealWrapper
        variants={{
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className={` ${containerStyles}`}>
          <p className="uppercase font-sans font-[600] text-sm tracking-wider mb-4 ">
            Contact us
          </p>
          <p
            className={`uppercase font-barlow font-[600]  mb-6 ${titleStyles}`}
          >
            Have Questions?
            <br />
            Get in Touch!
          </p>

          <p className="font-sans mb-10 text-muted-primary">
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim.
          </p>
          <div className="flex gap-3 items-start">
            <MapPin className="text-primary mt-1" />
            <p className="font-sans  mb-6 text-muted-primary">
              {BRAND_DETAILS.address.streetName},{" "}
              {BRAND_DETAILS.address.building}
              <br />
              {BRAND_DETAILS.address.shuburb}, {BRAND_DETAILS.address.postcode}
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <Mail className="text-primary" />
            <Link
              href={`mailto:${BRAND_DETAILS.email}`}
              className="font-sans mb-6 text-muted-primary inline-block relative 
            after:content-[''] after:absolute after:left-1/2 after:-bottom-1 
            after:h-[1.5px] after:w-0  after:bg-black after:-translate-x-1/2
            after:transition-all after:duration-300 hover:after:w-full"
            >
              {BRAND_DETAILS.email}
            </Link>
          </div>

          <div className="flex gap-3 items-start mb-10">
            {BRAND_DETAILS.phone && (
              <>
                <Smartphone className="text-primary mt-1" />
                <p className="font-barlow text-xl lg:text-2xl text-foreground  ">
                  {BRAND_DETAILS.phone}
                </p>
              </>
            )}
          </div>

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
