"use client";
import { motion } from "motion/react";
import React, { useState } from "react";
import { IconType } from "react-icons";

const InputField = ({
  inputStyles,
  icon: Icon,
  iconStyles = "",
  label,
  multiline = false,
}: {
  inputStyles?: string;
  iconStyles?: string;
  icon: IconType;
  label: string;
  multiline?: boolean;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-full"
    >
      <div className="flex text-foreground items-center  gap-4 relative">
        <Icon
          className={`w-6 h-6 text-muted-primary ${iconStyles} ${
            multiline ? "self-start mt-3" : ""
          } `}
        />

        {!multiline && (
          <input
            type="text"
            className={`font-sans w-full focus:outline-none py-3  ${inputStyles}`}
            placeholder={label}
          />
        )}

        {multiline && (
          <textarea
            rows={3}
            className={`font-sans w-full focus:outline-none py-3  ${inputStyles}`}
            placeholder={label}
          />
        )}
      </div>

      {/* Bottom border layer */}
      <div className="relative h-[1px] w-full">
        {/* muted-secondary base line */}
        <div
          className={`absolute left-0 top-0 h-[0.5px] bg-muted-secondary transition-opacity duration-300 ${
            hovered ? "opacity-0" : "opacity-100"
          }`}
          style={{ width: "100%" }}
        />

        {/* black animated line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: hovered ? "100%" : "0%" }}
          transition={{ duration: 0.3 }}
          className="absolute left-0 top-0 h-[1px] bg-black"
        />
      </div>
    </div>
  );
};

export default InputField;
