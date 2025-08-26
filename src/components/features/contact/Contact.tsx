import ContactFormVariant from "./ContactFormVariant";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <section className="wrapper section-padding">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8  ">
        <ContactFormVariant
          containerStyles={"bg-form-background"}
          formContainerStyles="px-6 py-16 md:px-8 md:py-24 lg:px-14 lg:py-28 2xl:px-18"
        />
        <ContactInfo containerStyles={"md:pl-4 lg:pl-10 xl:pl-18"} />
      </div>
    </section>
  );
};

export default Contact;
