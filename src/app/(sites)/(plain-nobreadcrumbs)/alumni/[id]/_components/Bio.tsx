import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Bio = () => {
  return (
    <section className="section-padding wrapper font-sans flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
      <Image src="/team-model.avif" width={350} height={600} alt="name" />
      <div className="max-w-md px-5 md:px-0">
        <p className="uppercase text-sm  font-[600] tracking-wider xl:mb-4 text-foreground">
          Hi, I&apos;m
        </p>
        <h1 className="text-5xl font-barlow uppercase  font-bold mb-4 text-primary">
          Jane Doe
        </h1>
        <p className="text-muted-primary mb-4">
          Passionate web developer with 5+ years of experience in building
          responsive and user-friendly applications. Skilled in React, Next.js,
          and modern design systems.
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
  );
};

export default Bio;
