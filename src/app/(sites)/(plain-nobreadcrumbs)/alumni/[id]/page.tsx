import Bio from "./_components/Bio";
import { Contributions } from "./_components/Contributions";
import Learnings from "./_components/Learnings";
import Story from "./_components/Story";

const page = () => {
  return (
    <>
      <Bio />
      <Story />
      <Contributions />
      <Learnings />
    </>
  );
};

export default page;
