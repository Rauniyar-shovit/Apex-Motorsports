import ParallaxContainer from "@/components/features/achievements/ParallaxContainer";
import Values from "@/components/features/values/Values";
import JoinUsBanner from "./_components/JoinUsBanner";
import TeamsMembers from "./_components/TeamsMembers";
import mercedesTeam from "@/../../public/mercedes-team.jpg";

import raceTrack from "@/../../public/race-track.jpg";
import { client } from "@/sanity/lib/client";
import { ALL_ALUMNI_QUERY, TEAM_MEMBERS_QUERY } from "@/sanity/lib/queries";
import TeamSection from "../alumni/_components/TeamsSection";
const people = [
  {
    name: "Sienna Hewitt",
    role: "Founder & CEO",
    photo: "/team-model.avif",
    bio: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    email: "sienna.hewitt@example.com",
  },
  {
    name: "Ashwin Santiago",
    role: "Engineering Manager",
    photo: "/team-model.avif",
    bio: "Lead engineering teams at Netflix, Pitch, and Protocol Labs.",
    email: "ashwin.santiago@example.com",
  },
  {
    name: "Caitlyn King",
    role: "Product Designer",
    photo: "/team-model.avif",
    bio: "Founding design team at Figma. Former Pleo, Stripe, and Tile.",
    email: "caitlyn.king@example.com",
  },
  {
    name: "Owen Garcia",
    role: "Frontend Developer",
    photo: "/team-model.avif",
    bio: "Former frontend dev for Linear, Coinbase, and Postscript.",
    email: "owen.garcia@example.com",
  },
];

const TeamsPage = async () => {
  let departmentsWithMembers;

  try {
    departmentsWithMembers = await client.fetch(TEAM_MEMBERS_QUERY);
  } catch (error) {
    console.error("Error fetching alumnis:", error);
    return (
      <div className="wrapper py-20 text-center">
        <h2 className="text-2xl font-sans">
          Error loading Team Members Details
        </h2>
      </div>
    );
  }
  console.log(
    "🚀 ~ TeamsPage ~ departmentsWithMembers:",
    departmentsWithMembers
  );

  return (
    <main>
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
        bgImagePath={raceTrack}
        bgImageTitle={"race track"}
        containerStyles="h-[40vh] 3xl:h-[35vh]"
      >
        <div className="wrapper flex items-center justify-center text-center uppercase text-6xl font-barlow h-full">
          Meet Our Team
        </div>
      </ParallaxContainer>

      {/* {
        <section className="mt-20">
          <div className="section-padding wrapper font-sans">
            <h1 className="text-5xl font-barlow uppercase text-center ">
              Executives
            </h1>
            <div className="mt-6 border-b-2 border-primary w-40 mx-auto mb-10" />

            <TeamSection alumniArray={allAlumni} />
          </div>
        </section>
      } */}

      <section className="mt-20">
        <div className="section-padding wrapper font-sans">
          {departmentsWithMembers.map((department) => {
            console.log("🚀 ~ department:", department);
            return (
              <div key={department._id} className="mb-16">
                {/* Department Name */}
                <h1 className="text-5xl font-barlow uppercase text-center">
                  {department.department}
                </h1>
                <div className="mt-6 border-b-2 border-primary w-40 mx-auto mb-10" />

                {/* Render team members using your TeamSection component */}
                <TeamSection alumniArray={department.members} />
              </div>
            );
          })}
        </div>
      </section>

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
      <div className="mt-24">
        <ParallaxContainer
          bgImagePath={mercedesTeam}
          bgImageTitle={"mercedes team"}
          containerStyles={"-mb-20 md:-mb-24 xl:-mb-32"}
        >
          <JoinUsBanner />
        </ParallaxContainer>
      </div>
    </main>
  );
};

export default TeamsPage;
