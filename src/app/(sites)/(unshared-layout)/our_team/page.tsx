import Image from "next/image";
import ProfileCard from "./_components/ProfileCard";
import SitesNavbar from "@/components/navigation/SitesNavbar";
import { BreadCrumbs } from "@/components/reusable/BreadCrumbs";
import Values from "@/components/features/values/Values";
import ParallaxBackground from "@/components/features/achievements/ParallaxBackground";
import ParallaxContainer from "@/components/features/achievements/ParallaxContainer";
import SmoothScroll from "../../(shared-layout)/sponsors/_components/SmoothScroll";

const people = [
  {
    name: "Sienna Hewitt",
    role: "Founder & CEO",
    image: "/team/sienna.jpg",
    bio: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
  },
  {
    name: "Ashwin Santiago",
    role: "Engineering Manager",
    image: "/team/ashwin.jpg",
    bio: "Lead engineering teams at Netflix, Pitch, and Protocol Labs.",
  },
  {
    name: "Caitlyn King",
    role: "Product Designer",
    image: "/team/caitlyn.jpg",
    bio: "Founding design team at Figma. Former Pleo, Stripe, and Tile.",
  },
  {
    name: "Owen Garcia",
    role: "Frontend Developer",
    image: "/team/owen.jpg",
    bio: "Former frontend dev for Linear, Coinbase, and Postscript.",
  },
];

const TeamsPage = () => {
  return (
    <main>
      <SmoothScroll />
      <SitesNavbar />
      <BreadCrumbs />

      <section className="section-padding wrapper">
        <div className="flex flex-col items-center text-center gap-4 ">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-barlow mb-4 uppercase leading-tight">
            We are the people who <br /> make up Apex Motorsports
          </h2>
          <p className="text-muted-primary font-sans max-w-2xl mx-auto mb-16">
            Our philosophy is simple: unite driven students, fuel their
            creativity, and provide the support to design, build, and race at
            the highest level of Formula SAE.
          </p>

          {/* People grid
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {people.map((person) => (
              <div key={person.name} className="text-left">
                <div className="relative w-full h-56 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {person.name}
                </h3>
                <p className="text-sm text-gray-700">{person.role}</p>
                <p className="text-sm text-gray-500 mt-2">{person.bio}</p>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      <div className="mb-24">
        <Values />
      </div>

      <ParallaxContainer
        bgImagePath="/race-track.jpg"
        bgImageTitle="f1 sponsored"
        containerStyles="h-[60vh]"
      >
        <div className="wrapper flex items-center justify-center text-center uppercase text-6xl font-barlow h-full">
          Meet Our Team
        </div>
      </ParallaxContainer>
    </main>
  );
};

export default TeamsPage;
