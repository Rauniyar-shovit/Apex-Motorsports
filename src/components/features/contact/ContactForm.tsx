import React from "react";
import InputField from "./InputField";
import { BsSend } from "react-icons/bs";
const ContactForm = () => {
  return (
    <div className="flex-1 bg-form-background mx-10 ">
      <div className="px-16 py-28">
        <h2 className="text-5xl font-barlow uppercase mb-10">Contact Form</h2>
        <div className="flex flex-col gap-8 mb-16 ">
          <InputField label={"Name"} />
          <InputField label={"Email Address"} />
          <InputField label={"Contact"} />
        </div>

        <button className="flex items-center justify-center gap-3 font-sans bg-secondary px-10 py-5 text-white uppercase text-sm font-[600]">
          <BsSend className="text-lg" />
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
