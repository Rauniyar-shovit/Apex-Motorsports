import { BRAND_DETAILS } from "@/constants";
import MapEmbed from "./_components/MapEmbed";
import ContactInfo from "@/components/features/contact/ContactInfo";
import ContactForm from "@/components/features/contact/ContactForm";
import ContactSection from "@/components/features/contact/Contact";

const Contact = () => {
  return (
    <main>
      <MapEmbed
        lat={BRAND_DETAILS.address.lat}
        lng={BRAND_DETAILS.address.lng}
      />

      <ContactSection>
        <ContactInfo
          titleStyles="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem]"
          containerStyles={"lg:pr-30"}
        />
        <ContactForm showFormTitle={false} />
      </ContactSection>
    </main>
  );
};

export default Contact;
