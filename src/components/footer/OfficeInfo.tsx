import { Address } from "@/models";
import Link from "next/link";

type OfficeInfoProps = {
  address: Address;
  email: string;
  phone: string;
};

const OfficeInfo = ({ email, phone, address }: OfficeInfoProps) => {
  const { country, streetName, building, shuburb, postcode } = address;
  return (
    <div>
      <h4 className="uppercase font-barlow font-[700] tracking-wide text-lg mb-6 md:text-xl">
        Office
      </h4>

      <p className="font-sans text-muted-secondary leading-relaxed mb-6">
        {country} —
        <br />
        {streetName}, {building}
        <br />
        {shuburb}, {postcode}
      </p>

      {/* Email with center-growing underline */}
      <Link
        href={`mailto:${email}`}
        className="group font-sans inline-block relative text-white mb-6
               after:content-[''] after:absolute after:left-0 after:-bottom-1
               after:h-[1px] after:w-full after:bg-white
               after:origin-left after:duration-300 after:ease-out
               after:transition-all hover:after:w-0"
      >
        {email}
      </Link>

      <p className="font-barlow text-lg md:text-xl font-[700] mt-6">{phone}</p>
    </div>
  );
};

export default OfficeInfo;
