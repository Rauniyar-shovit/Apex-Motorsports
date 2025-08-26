"use client";

import InputField from "@/components/features/contact/InputField";
import Button from "@/components/reusable/Button";
import RevealWrapper from "@/components/reusable/RevealWrapper";
import { CircleAlert, Mail, Pencil, Smartphone, User } from "lucide-react";
import { BsSend } from "react-icons/bs";
import { FaEnvelope, FaPencil, FaUser } from "react-icons/fa6";

const Form = () => {
  return (
    <div className="flex-1 2xl:mx-10 w-full">
      <div className=" py-16  md:py-24  lg:py-28 ">
        {/* <RevealWrapper
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-barlow uppercase mb-10">
            Contact Form
          </h2>
        </RevealWrapper> */}
        <div className="flex flex-col gap-4 md:gap-8 mb-16 ">
          <div className="flex gap-6">
            <InputField label={"Name"} icon={User} />
            <InputField label={"Email Address"} icon={Mail} />
          </div>
          <div className="flex gap-6">
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

export default Form;
