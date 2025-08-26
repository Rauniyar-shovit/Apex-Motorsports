import { BRAND_DETAILS } from "@/constants";
import MapEmbed from "./_components/MapEmbed";

const Contact = () => {
  return (
    <main className="min-h-screen">
      <MapEmbed
        lat={BRAND_DETAILS.address.lat}
        lng={BRAND_DETAILS.address.lng}
      />
    </main>
  );
};

export default Contact;
