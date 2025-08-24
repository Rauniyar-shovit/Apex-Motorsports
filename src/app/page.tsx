import AboutUs from "@/components/features/about/AboutUs";
import Achievements from "@/components/features/achievements/Achievements";
import Contact from "@/components/features/contact/Contact";
import MarqueePartners from "@/components/features/marquee/MarqueePartners";
import Values from "@/components/features/values/Values";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/navigation/Navbar";
import FormulaSAE from "../components/features/competition/FormulaSAE";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar intersectingSectionId="hero" />
      <Hero />
      <Values />
      <FormulaSAE />
      {/* <MarqueeText /> */}
      <AboutUs />
      <Achievements />
      <Contact />
      <MarqueePartners />
      <Footer />
    </main>
  );
}
