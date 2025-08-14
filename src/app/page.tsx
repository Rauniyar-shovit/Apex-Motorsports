import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="overflow-hidden">
        <div className="relative w-full h-screen">
          <Navbar />
          <Image
            src={"/f1_cars.avif"}
            alt="formula one cars"
            className="absolute w-full h-full object-cover"
            width={2880}
            height={1800}
          />
          <div className="absolute h-full w-full z-20 bg-overlay" />
        </div>
        <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 transform z-30 whitespace-pre-line">
          <div>
            <h3 className="font-barlow text-xl md:text-4xl">
              Australia&apos;s Premier FSAE Team
            </h3>

            <h1 className="font-barlow text-5xl md:text-7xl lg:text-8xl 2xl:text-9xl ">
              Driven by Passion {`\n`} Fueled by Innovation
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
}
