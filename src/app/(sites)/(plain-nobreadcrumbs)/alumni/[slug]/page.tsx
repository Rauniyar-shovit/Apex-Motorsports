import { client } from "@/sanity/lib/client";
import Bio from "./_components/Bio";
import { Contributions } from "./_components/Contributions";
import Learnings from "./_components/Learnings";
import Story from "./_components/Story";
import { ALUMNI_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { Alumni as AlumniType } from "@/models";
import NotFound from "@/components/reusable/NotFound";

const Alumni = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  let alumni;

  try {
    alumni = await client.fetch<AlumniType>(ALUMNI_BY_SLUG_QUERY, {
      slug,
    });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return (
      <NotFound
        containerStyles="!h-[90vh]"
        notFoundText="Error fetching Alumni Details"
      />
    );
  }

  if (!alumni) {
    return (
      <NotFound containerStyles="!h-[90vh]" notFoundText="No Alumni Found" />
    );
  }

  return (
    <>
      <Bio
        profileImage={alumni.profileImage}
        name={alumni.name}
        bio={alumni.bio}
        linkedin={alumni.linkedin}
        email={alumni.email}
      />
      <Story myStory={alumni.myStory} />
      <Contributions Contributions={alumni.Contributions} />
      <Learnings learningsAndExperience={alumni.learningsAndExperience} />
    </>
  );
};

export default Alumni;
