"use client";
import { motion } from "motion/react";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";

const InputField = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-full"
    >
      <div className="flex text-gray-700 items-center py-3 gap-4 relative">
        <FaRegUser className="text-muted-primary text-xl" />
        <input
          className="font-sans w-full focus:outline-none"
          placeholder="Name"
        />
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
