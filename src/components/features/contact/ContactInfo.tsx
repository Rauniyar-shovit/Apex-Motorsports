"use client";
import Link from "next/link";
import React from "react";
import {
  FaDiscord,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const socials = [
  {
    title: "facebook",
    icon: FaFacebookF,
    link: "",
    color: "#3a5694",
  },
  {
    title: "discord",
    icon: FaDiscord,
    link: "",
    color: "#5c69f2",
  },
  {
    title: "instagram",
    icon: FaInstagram,
    link: "",
    color: "#fc08af",
  },
  {
    title: "x",
    icon: FaXTwitter,
    link: "",
    color: "#249ef0",
  },
];

const ContactInfo = () => {
  return (
    <div className="flex-1 w-full md:items-center">
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
          785 15h Street, Office 478
          <br />
          Berlin, De 81566
        </p>

        <p
          className="font-sans mb-6 text-muted-primary inline-block relative 
   after:content-[''] after:absolute after:left-1/2 after:-bottom-1 
   after:h-[1.5px] after:w-0  after:bg-black after:-translate-x-1/2
   after:transition-all after:duration-300 hover:after:w-full"
        >
          info@email.com
        </p>

        <p className="font-barlow text-xl lg:text-2xl text-foreground mb-10 ">
          +1 840 841 25 69
        </p>

        <div className="flex gap-2">
          {socials.map(({ title, icon: Icon, link, color }) => (
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
    </div>
  );
};

export default ContactInfo;
