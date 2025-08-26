import AboutUs from "@/components/features/about/AboutUs";
import Achievements from "@/components/features/achievements/Achievements";
import FormulaSAE from "@/components/features/competition/FormulaSAE";
import Contact from "@/components/features/contact/Contact";
import MarqueePartners from "@/components/features/marquee/MarqueePartners";
import MarqueeText from "@/components/features/marquee/MarqueeText";
import Values from "@/components/features/values/Values";
import Footer from "@/components/footer/Footer";
import HomeNavbar from "@/components/navigation/HomeNavbar";
import Hero from "./_components/Hero";
import ContactInfo from "@/components/features/contact/ContactInfo";
import ContactForm from "@/components/features/contact/ContactForm";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HomeNavbar intersectingSectionId="hero" />
      <Hero />
      <Values />
      <FormulaSAE />
      <AboutUs />
      <MarqueeText />
      <Achievements />
      <Contact>
        <ContactForm
          containerStyles={"bg-form-background"}
          formContainerStyles="px-6 py-16 md:px-8 md:py-24 lg:px-14 lg:py-28 2xl:px-18"
        />
        <ContactInfo containerStyles={"md:pl-4 lg:pl-10 xl:pl-18"} />
      </Contact>
      <MarqueePartners />
      <Footer />
    </main>
  );
}
