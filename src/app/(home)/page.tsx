import AboutUs from "@/components/features/about/AboutUs";
import Achievements from "@/components/features/achievements/Achievements";
import FormulaSAE from "@/components/features/competition/FormulaSAE";
import Contact from "@/components/features/contact/Contact";
import Hero from "@/components/features/Hero";
import MarqueePartners from "@/components/features/marquee/MarqueePartners";
import MarqueeText from "@/components/features/marquee/MarqueeText";
import Values from "@/components/features/values/Values";
import Footer from "@/components/footer/Footer";
import HomeNavbar from "@/components/navigation/HomeNavbar";

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
      <Contact />
      <MarqueePartners />
      <Footer />
    </main>
  );
}
