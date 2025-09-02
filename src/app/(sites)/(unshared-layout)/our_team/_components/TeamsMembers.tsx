import { TeamMemberProfile } from "@/models";
import ProfileCard from "./ProfileCard";
import Banner from "@/components/reusable/Banner";

const TeamsMembers = ({
  members,
  departmentName,
}: {
  members: TeamMemberProfile[];
  departmentName: string;
}) => {
  return (
    <section className="mt-20">
      <Banner bannerText={departmentName} />
      <p></p>
      <div className="section-padding wrapper">
        <div className="mt-12 flex flex-col md:flex-row flex-wrap items-center justify-center gap-10 font-sans">
          {members.map((member, index) => (
            <ProfileCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsMembers;
