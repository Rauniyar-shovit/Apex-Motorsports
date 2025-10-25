import mercedesTeam from "@/../../public/mercedes-team.jpg";
import ParallaxContainer from "@/components/features/achievements/ParallaxContainer";
import Values from "@/components/features/values/Values";
import JoinUsBanner from "./_components/JoinUsBanner";
import raceTrack from "@/../../public/race-track.jpg";
import { client } from "@/sanity/lib/client";
import { TEAM_MEMBERS_QUERY } from "@/sanity/lib/queries";
import TeamTabs from "./_components/TeamTabs";
import DepartmentsSection from "./_components/DepartmentSection";
import { DEPARTMENT_CATEGORIES } from "@/sanity/constants";
import { DepartmentKey, TeamDepartments } from "@/models";

const TeamsPage = async ({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) => {
  const params = await searchParams;

  const department: DepartmentKey = Object.values(
    DEPARTMENT_CATEGORIES
  ).includes(params?.department as DepartmentKey)
    ? (params.department as DepartmentKey)
    : DEPARTMENT_CATEGORIES.TECHNICAL;

  let teamMembersbyDepartment: TeamDepartments;

  try {
    teamMembersbyDepartment = await client.fetch(TEAM_MEMBERS_QUERY);
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

  const managementDepartments = teamMembersbyDepartment.management;

  const filteredDepartmentMembers = teamMembersbyDepartment[department] || [];

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
        <Values containerStyles="mt-10" />
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

      <DepartmentsSection departmentsArray={managementDepartments} />

      <TeamTabs tabContent={filteredDepartmentMembers} />
    </main>
  );
};

export default TeamsPage;
