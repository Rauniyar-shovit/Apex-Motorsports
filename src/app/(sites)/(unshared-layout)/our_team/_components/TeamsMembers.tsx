import { TeamMemberProfile } from "@/models";
import ProfileCard from "./ProfileCard";
import Banner from "@/components/reusable/Banner";
import Image from "next/image";

const TeamsMembers = ({
  members,
  departmentName,
  departmentImage,
  departmentDescription,
}: {
  members: TeamMemberProfile[];
  departmentName: string;
  departmentImage?: string;
  departmentDescription?: string;
}) => {
  return (
    <section className="mt-20">
      <Banner bannerText={departmentName} />

      <div className="section-padding wrapper font-sans">
        {departmentImage && departmentDescription && (
          <div className="flex items-center justify-start -mt-10 ">
            <Image src={departmentImage} width={200} height={200} alt="logo" />
            <p className="max-w-3xl  text-left text-foreground ">
              {departmentDescription}
            </p>
          </div>
        )}

        <div className="mt-12 flex flex-col md:flex-row flex-wrap items-center justify-center gap-10 ">
          {members.map((member, index) => (
            <ProfileCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsMembers;
