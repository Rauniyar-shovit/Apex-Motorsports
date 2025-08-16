import Hero from "@/components/Hero";
import Navbar from "@/components/Navigation/Navbar";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar intersectingSectionId="hero" />
      <Hero />
      <div id="next" className="min-h-screen"></div>
      <div className="min-h-screen"> </div>
    </main>
  );
}
