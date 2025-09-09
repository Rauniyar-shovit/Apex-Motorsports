import ParallaxContainer from "@/components/features/achievements/ParallaxContainer";
import Values from "@/components/features/values/Values";
import SitesNavbar from "@/components/navigation/SitesNavbar";
import { BreadCrumbs } from "@/components/reusable/BreadCrumbs";
import SmoothScroll from "../../(shared-layout)/sponsors/_components/SmoothScroll";
import TeamsMembers from "./_components/TeamsMembers";

const people = [
  {
    name: "Sienna Hewitt",
    role: "Founder & CEO",
    photo: "/team-model.avif",
    bio: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
  },
  {
    name: "Ashwin Santiago",
    role: "Engineering Manager",
    photo: "/team-model.avif",
    bio: "Lead engineering teams at Netflix, Pitch, and Protocol Labs.",
  },
  {
    name: "Caitlyn King",
    role: "Product Designer",
    photo: "/team-model.avif",
    bio: "Founding design team at Figma. Former Pleo, Stripe, and Tile.",
  },
  {
    name: "Owen Garcia",
    role: "Frontend Developer",
    photo: "/team-model.avif",
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
        </div>
      </section>

      <div className="mb-24">
        <Values />
      </div>

      <ParallaxContainer
        bgImagePath="/race-track.jpg"
        bgImageTitle="f1 sponsored"
        containerStyles="h-[40vh] 3xl:h-[35vh]"
      >
        <div className="wrapper flex items-center justify-center text-center uppercase text-6xl font-barlow h-full">
          Meet Our Team
        </div>
      </ParallaxContainer>

      <TeamsMembers members={people} departmentName="Upper Management" />
      <TeamsMembers members={people} departmentName="Aerodynamics" />
      <TeamsMembers members={people} departmentName="Business Team" />
      <TeamsMembers members={people} departmentName="Electronics" />
      <TeamsMembers members={people} departmentName="E-powerTrain" />
      <TeamsMembers members={people} departmentName="Autonomous System" />
      <TeamsMembers members={people} departmentName="Chassis Design" />
      <TeamsMembers members={people} departmentName="Vehicle Performance" />
      <TeamsMembers
        members={people}
        departmentName="Ancillary Managers
"
      />
    </main>
  );
};

export default TeamsPage;
