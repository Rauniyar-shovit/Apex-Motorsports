import React from "react";
import { IconType } from "react-icons";

const Button = ({
  icon: Icon,
  btnStyles,
  beforeStyles,
  title,
  handleClick,
  btnType = "button",
}: {
  icon?: IconType;
  btnStyles?: string;
  title: string;
  beforeStyles?: string;
  handleClick?: () => void;
  btnType: "button" | "submit" | "reset";
}) => {
  const defaultBeforeStyles =
    "before:absolute before:h-0 before:w-0 before:rounded-full  before:duration-200 before:ease-out hover:before:h-56 hover:before:w-56 ";
  return (
    <button
      type={btnType}
      className={`relative flex items-center justify-center overflow-hidden  shadow-2xl transition-all cursor-pointer ${defaultBeforeStyles} ${btnStyles} ${beforeStyles}`}
      onClick={handleClick}
    >
      <span className="relative z-10 flex font-sans gap-3 items-center justify-center uppercase text-xs lg:text-sm font-[600] tracking-wider">
        {Icon && <Icon className="text-lg" />}
        <p>{title}</p>
      </span>
    </button>
  );
};

export default Button;
