import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

type ProfileCardProps = {
  image: string;
  name: string;
  role: string;
  experience: string;
  socials: {
    linkedin: string;
    email: string;
  };
};

const ProfileCard = ({
  image,
  name,
  role,
  experience,
  socials,
}: ProfileCardProps) => {
  return (
    <div className="flex flex-col items-center text-center font-sans">
      {/* Whole card links to alumni detail page */}
      <Link
        href={`/alumni/${encodeURIComponent(name)}`}
        className="flex items-center flex-col"
      >
        <Image
          src={image}
          alt={name}
          width={300}
          height={500}
          className="object-cover mb-4 "
        />
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-muted-primary mt-1">
          {role} | {experience}
        </p>
      </Link>

      {/* Socials stay outside so they’re clickable */}
      <div className="flex items-center justify-center gap-4 mt-4">
        {socials.linkedin && (
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <FaLinkedin size={22} />
          </a>
        )}
        {socials.email && (
          <a
            href={`mailto:${socials.email}`}
            className="text-primary hover:text-muted-primary"
          >
            <IoMail size={25} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
