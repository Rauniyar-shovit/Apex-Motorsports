"use client";

import React from "react";
import InputField from "./InputField";
import { BsSend } from "react-icons/bs";
import { FaEnvelope, FaPencil, FaUser } from "react-icons/fa6";
import RevealWrapper from "@/components/Reusable/RevealWrapper";
import Button from "@/components/Reusable/Button";

const ContactForm = () => {
  return (
    <div className="flex-1 bg-form-background 2xl:mx-10 w-full">
      <div className="px-6 py-16 md:px-8 md:py-24 lg:px-14 lg:py-28 2xl:px-18">
        <RevealWrapper
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-barlow uppercase mb-10">
            Contact Form
          </h2>
        </RevealWrapper>
        <div className="flex flex-col gap-4 md:gap-8 mb-16 ">
          <InputField label={"Name"} icon={FaUser} />
          <InputField label={"Email Address"} icon={FaEnvelope} />
          <InputField
            multiline={true}
            label={"How can we help you? Feel free to get in touch!"}
            icon={FaPencil}
          />
        </div>

        <Button
          title={"Get in touch"}
          icon={BsSend}
          btnStyles="px-8 py-3 md:px-9 md:py-4  bg-secondary  hover:shadow-primary text-white"
          beforeStyles="before:bg-primary"
        />
      </div>
    </div>
  );
};

export default ContactForm;
