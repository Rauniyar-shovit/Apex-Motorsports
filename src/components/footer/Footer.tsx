import { BRAND_DETAILS } from "@/constants";
import { FaRegCopyright } from "react-icons/fa6";
import FooterLinks from "./FooterLinks";
import OfficeInfo from "./OfficeInfo";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="section-padding">
      <div className="bg-foreground text-white py-10 lg:pt-24">
        <div className="wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
            {/* 1) Blurb */}
            <div>
              <h4 className="uppercase font-barlow tracking-wide text-lg md:text-xl mb-4">
                {BRAND_DETAILS.name}
              </h4>
              <p className="font-sans text-muted-secondary leading-relaxed">
                {BRAND_DETAILS.motto}
              </p>
            </div>

            {/* 2) Office */}
            <OfficeInfo
              address={BRAND_DETAILS.address}
              phone={BRAND_DETAILS.phone}
              email={BRAND_DETAILS.email}
            />
            {/* 3) Links */}
            <FooterLinks />
            {/* 4) Socials */}
            <Socials />
          </div>

          <div className="mt-12 border-t-[1px] border-muted-primary pt-6  text-muted-secondary flex gap-1 items-center font-sans ">
            {BRAND_DETAILS.name} <FaRegCopyright />
            {new Date().getFullYear()}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
