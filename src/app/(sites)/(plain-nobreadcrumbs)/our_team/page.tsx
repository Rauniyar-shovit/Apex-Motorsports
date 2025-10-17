import mercedesTeam from "@/../../public/mercedes-team.jpg";
import ParallaxContainer from "@/components/features/achievements/ParallaxContainer";
import Values from "@/components/features/values/Values";
import JoinUsBanner from "./_components/JoinUsBanner";
import raceTrack from "@/../../public/race-track.jpg";
import { client } from "@/sanity/lib/client";
import { TEAM_MEMBERS_QUERY } from "@/sanity/lib/queries";
import TeamSection from "../../(shared-breadcrumbs)/alumni/_components/TeamsSection";

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

  return (
    <main>
      <ParallaxContainer
        bgImagePath={mercedesTeam}
        bgImageTitle={"mercedes team"}
        containerStyles={"-mb-20 md:-mb-24 xl:-mb-32"}
      >
        <JoinUsBanner />
      </ParallaxContainer>

      <section className="section-padding pt-24 wrapper">
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

      <div></div>
      <section className="mt-20">
        <div className="section-padding wrapper font-sans">
          {departmentsWithMembers.map((department) => {
            if (department.members.length === 0) return null;
            return (
              <div key={department._id} className="mb-16">
                {/* Department Name */}
                <h1 className="text-4xl md:text-5xl font-barlow uppercase text-center">
                  {department.department}
                </h1>
                <div className="mt-4 border-b-2 border-primary w-40 mx-auto mb-10" />

                {/* Render team members using your TeamSection component */}
                <TeamSection
                  members={department.members}
                  enableHoverOverlay={false}
                />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default TeamsPage;
