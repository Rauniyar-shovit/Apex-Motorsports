import Values from "@/components/features/values/Values";
import Hero from "@/components/Hero";
import InfiniteScrollText from "@/components/features/infiniteScroll/InfiniteScrollText";
import Navbar from "@/components/navigation/Navbar";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar intersectingSectionId="hero" />
      <Hero />
      <Values />
      <InfiniteScrollText />
      <div id="next" className="min-h-screen"></div>
      <div className="min-h-screen"> </div>
    </main>
  );
}
