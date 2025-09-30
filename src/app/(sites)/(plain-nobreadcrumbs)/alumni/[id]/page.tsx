import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const page = () => {
  return (
    <>
      <section className="section-padding wrapper font-sans flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
        <Image src="/team-model.avif" width={350} height={600} alt="name" />
        <div className="max-w-md px-5 md:px-0">
          <h1 className="text-5xl font-barlow uppercase  font-bold mb-4 text-primary">
            Jane Doe
          </h1>
          <p className="text-muted-primary mb-4">
            Passionate web developer with 5+ years of experience in building
            responsive and user-friendly applications. Skilled in React,
            Next.js, and modern design systems.
          </p>
          <p>
            Outside of work, enjoys photography, traveling, and exploring new
            cuisines.
          </p>

          <div className="flex items-center justify-start gap-4 mt-4">
            <a
              href={"#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href={`mailto:"#"`}
              className="text-primary hover:text-muted-primary"
            >
              <IoMail size={25} />
            </a>
          </div>
        </div>
      </section>
      <section className=" font-sans bg-foreground">
        <div className="section-padding wrapper">
          <div className={` font-sans lg:px-20 py-14 md:py-16   px-5 `}>
            <p className="uppercase text-sm  font-[600] tracking-wider xl:mb-4 text-white">
              My story
            </p>

            <h2 className="mt-2 font-barlow text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight text-primary uppercase ">
              at apex motorsport
            </h2>

            <p className="mt-3 md:mt-6 text-base lg:text-lg leading-7 md:leading-8 text-muted-secondary">
              My journey with Apex has been nothing short of transformative.
              From the very first day, I was surrounded by a team that valued
              innovation, collaboration, and perseverance. Every challenge
              became an opportunity to grow, and every milestone reflected not
              just my effort, but the collective spirit of the team. Being part
              of Apex taught me resilience, creativity, and the importance of
              pushing boundaries to achieve excellence.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="section-padding wrapper font-sans ">
          <p className="font-barlow text-5xl uppercase text-center mb-10">
            {" "}
            My Contributions
          </p>
          <div>asdsa</div>
        </div>
      </section>
    </>
  );
};

export default page;
