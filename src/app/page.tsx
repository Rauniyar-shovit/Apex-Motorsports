import Values from "@/components/features/values/Values";
import Hero from "@/components/Hero";
import Navbar from "@/components/navigation/Navbar";
import Achievements from "@/components/features/achievements/Achievements";
import Contact from "@/components/features/contact/Contact";
import Footer from "@/components/footer/Footer";
import MarqueeText from "@/components/features/marquee/MarqueeText";
import MarqueePartners from "@/components/features/marquee/MarqueePartners";
import FormulaSAE from "../components/features/competition/FormulaSAE";
import WhoAreWe from "@/components/features/whoAreWe/WhoAreWe";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar intersectingSectionId="hero" />
      <Hero />
      <Values />
      <FormulaSAE />
      {/* <MarqueeText /> */}
      <WhoAreWe />
      <Achievements />
      <Contact />
      <MarqueePartners />
      <Footer />
    </main>
  );
}
