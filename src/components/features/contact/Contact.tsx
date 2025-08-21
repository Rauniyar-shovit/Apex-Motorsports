import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <section className="wrapper section-padding">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8  ">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
};

export default Contact;
