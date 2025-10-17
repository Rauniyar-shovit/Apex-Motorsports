import { MemberProfile as ProfileCardProps } from "@/models";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const ProfileCard = ({
  profileImage,
  name,
  role,
  slug,
  experience,
  linkedin,
  email,
  bio,
  enableHoverOverlay = true,
  disableNavigation = false,
  link,
}: ProfileCardProps) => {
  const image = urlFor(profileImage!).url();

  const hoverOverlay = enableHoverOverlay && (
    <div className="absolute  inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <div className="text-white h-full w-full flex justify-center items-center">
        Read My Story
      </div>
    </div>
  );

  const renderRoleExperience = role && experience && (
    <p className="text-muted-primary mt-1">
      {role} | {experience}
    </p>
  );

  const renderBio = bio && (
    <p className="text-muted-primary mt-1 mx-10 md:mx-5 text-sm">{bio}</p>
  );

  return (
    <div className="flex flex-col items-center text-center font-sans group">
      {/* Whole card links to alumni detail page */}
      <Link
        href={`${link ? link : ""}`}
        className={`flex items-center flex-col ${disableNavigation ? "pointer-events-none" : ""}`}
      >
        <div className="relative mb-4">
          <Image
            src={image}
            alt={name!}
            width={300}
            height={500}
            className="object-cover  max-w-[300px] max-h-[450px]"
          />
          {hoverOverlay}
        </div>

        <h3 className="text-xl font-semibold">{name}</h3>
        {renderRoleExperience}

        {renderBio}
      </Link>

      <div className="flex items-center justify-center gap-4 mt-4">
        {linkedin && (
          <Link
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <FaLinkedin size={22} />
          </Link>
        )}
        {email && (
          <Link
            href={`mailto:${email}`}
            className="text-primary hover:text-muted-primary"
          >
            <IoMail size={25} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
