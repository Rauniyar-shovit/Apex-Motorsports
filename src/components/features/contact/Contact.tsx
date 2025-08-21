import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="wrapper section-padding">
      <div className="flex items-center justify-center">
        <ContactForm />
        <div className="flex-1">Quesrtion</div>
      </div>
    </section>
  );
};

export default Contact;
