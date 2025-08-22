import Values from "@/components/features/values/Values";
import Hero from "@/components/Hero";
import Navbar from "@/components/navigation/Navbar";
import Achievements from "@/components/features/achievements/Achievements";
import Contact from "@/components/features/contact/Contact";
import Footer from "@/components/footer/Footer";
import MarqueeText from "@/components/features/marquee/MarqueeText";
import MarqueePartners from "@/components/features/marquee/MarqueePartners";
import FormulaSAE from "../components/features/competition/FormulaSAE";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar intersectingSectionId="hero" />
      <Hero />
      <Values />
      <FormulaSAE />
      <MarqueeText />
      <Achievements />
      <Contact />
      <MarqueePartners />
      <Footer />
    </main>
  );
}
