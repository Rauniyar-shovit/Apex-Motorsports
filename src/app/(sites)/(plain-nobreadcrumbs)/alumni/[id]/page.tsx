import { client } from "@/sanity/lib/client";
import Bio from "./_components/Bio";
import { Contributions } from "./_components/Contributions";
import Learnings from "./_components/Learnings";
import Story from "./_components/Story";
import { ALUMNI_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { Alumni } from "@/models";

const page = async () => {
  const alumni = await client.fetch<Alumni>(ALUMNI_BY_SLUG_QUERY, {
    slug: "jane-doe",
  });

  if (!alumni) {
    return;
  }
  console.log("🚀 ~ page ~ alumni:", alumni);

  return (
    <>
      <Bio
        profileImage={alumni.profileImage}
        name={alumni.name}
        bio={alumni.bio}
        linkedin={alumni.linkedin}
        email={alumni.email}
      />
      <Story />
      <Contributions />
      <Learnings />
    </>
  );
};

export default page;
