"use client";

import Button from "@/components/reusable/Button";
import RevealWrapper from "@/components/reusable/RevealWrapper";
import { BsSend } from "react-icons/bs";
import InputField from "./InputField";
import { CircleAlert, Mail, Pencil, Smartphone, User } from "lucide-react";

type ContactFormProps = {
  containerStyles?: string;
  showFormTitle?: boolean;
  formContainerStyles?: string;
};

const ContactFormVariant = ({
  containerStyles,
  formContainerStyles,
  showFormTitle = true,
}: ContactFormProps) => {
  return (
    <div className={`flex-1  2xl:mx-10 w-full  ${containerStyles}`}>
      <div className={`${formContainerStyles}`}>
        <RevealWrapper
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className=" block md:hidden mt-5 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-barlow uppercase mb-10">
            Contact Form
          </h2>
        </RevealWrapper>

        <div className="flex flex-col  gap-4 md:gap-8 mb-16">
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 md:gap-8">
            <InputField label={"Name"} icon={User} />
            <InputField label={"Email Address"} icon={Mail} />
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row  gap-6 md:gap-8">
            <InputField label={"Phone"} icon={Smartphone} />
            <InputField label={"Email Address"} icon={CircleAlert} />
          </div>
          <InputField
            multiline={true}
            label={"How can we help you? Feel free to get in touch!"}
            icon={Pencil}
          />
        </div>

        <Button
          handleClick={() => {}}
          title={"Get in touch"}
          icon={BsSend}
          btnStyles="px-8 py-3 md:px-9 md:py-4  bg-secondary  hover:shadow-primary text-white"
          beforeStyles="before:bg-primary"
        />
      </div>
    </div>
  );
};

export default ContactFormVariant;
