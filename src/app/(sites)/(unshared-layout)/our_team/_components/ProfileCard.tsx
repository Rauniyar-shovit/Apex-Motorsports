import Button from "@/components/reusable/Button";
import { TeamMemberProfile } from "@/models";
import Image from "next/image";
import { IoMailOutline } from "react-icons/io5";

const ProfileCard = ({ name, photo, role, bio, email }: TeamMemberProfile) => {
  return (
    <div className="group md:max-w-[260px] w-full">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={photo}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 50vw, 25vw"
        />

        {/* Hover overlay with email button */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <a href={`mailto:${email}`} className="inline-block">
            <Button
              btnType="submit"
              title={"Email"}
              icon={IoMailOutline}
              btnStyles="px-6 py-2 md:px-6 md:py-4  bg-foreground  text-white mt-16 hover:text-foreground "
              beforeStyles="before:bg-white"
              btnTextStyles="text-xs"
            />
          </a>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-[15px] font-semibold text-foreground">{name}</h3>
        <p className="mt-1 text-sm text-muted-primary">{role}</p>
        <p className="mt-3 text-sm text-muted-primary">{bio}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
