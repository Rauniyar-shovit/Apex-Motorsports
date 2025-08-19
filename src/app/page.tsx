import Values_1 from "@/components/features/values/Values";
import Hero from "@/components/Hero";
import Navbar from "@/components/navigation/Navbar";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar intersectingSectionId="hero" />
      <Hero />
      <Values_1 />
      <div id="next" className="min-h-screen"></div>
      <div className="min-h-screen"> </div>
    </main>
  );
}
