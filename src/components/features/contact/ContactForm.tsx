"use client";

import RevealWrapper from "@/components/reusable/RevealWrapper";
import Form from "./Form";

type ContactFormContainerProps = {
  containerStyles?: string;
  showFormTitle?: boolean;
  formContainerStyles?: string;
};

const ContactFormContainer = ({
  containerStyles,
  showFormTitle = true,
  formContainerStyles,
}: ContactFormContainerProps) => {
  return (
    <div className={`flex-1  2xl:mx-10 w-full  ${containerStyles}`}>
      <div className={`${formContainerStyles}`}>
        <RevealWrapper
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2
            className={` ${
              showFormTitle ? "" : "block md:hidden"
            } mt-5 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-barlow uppercase mb-10`}
          >
            Contact Form
          </h2>
        </RevealWrapper>
        <Form />
      </div>
    </div>
  );
};

export default ContactFormContainer;
