import { BRAND_DETAILS } from "@/constants";
import MapEmbed from "./_components/MapEmbed";
import ContactInfo from "@/components/features/contact/ContactInfo";
import Form from "./_components/Form";
import ContactFormVariant from "@/components/features/contact/ContactFormVariant";

const Contact = () => {
  return (
    <main className="min-h-screen">
      <MapEmbed
        lat={BRAND_DETAILS.address.lat}
        lng={BRAND_DETAILS.address.lng}
      />
      <section className="wrapper section-padding">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8  ">
          <ContactInfo
            titleStyles="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem]"
            containerStyles={"lg:pr-30"}
          />
          <ContactFormVariant showFormTitle={false} />
        </div>
      </section>
    </main>
  );
};

export default Contact;
