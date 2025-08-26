"use client";
import { ContactFormValues, FieldId } from "@/models";
import { motion } from "motion/react";
import React, { useState } from "react";
import { FieldErrors, UseFormRegister, ValidationRule } from "react-hook-form";
import { IconType } from "react-icons";

export type InputFieldProps = {
  fieldId: FieldId;
  maxLength?: number;
  label: string;
  errors: FieldErrors<ContactFormValues>;
  register: UseFormRegister<ContactFormValues>;
  customValidation?: ValidationRule<RegExp>;
  isRequired?: boolean;
  placeholder?: string;
  inputType?: string;
  defaultValue?: string;
  inputStyles?: string;
  iconStyles?: string;
  icon: IconType;
  multiline?: boolean;
};

const InputField = ({
  fieldId,
  inputStyles,
  icon: Icon,
  iconStyles = "",
  multiline = false,
  label,
  errors,
  maxLength,
  register,
  customValidation,
  isRequired = true,
  placeholder,
  inputType = "text",
}: InputFieldProps) => {
  const [hovered, setHovered] = useState(false);

  const inputProps = {
    ...register(fieldId, {
      required: isRequired ? `${label} is required` : false,
      maxLength: maxLength ? maxLength : undefined,
      pattern: customValidation ? customValidation : undefined,
    }),
  };

  return (
    <div className="flex flex-col flex-1 w-full">
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
              className={`font-sans w-full focus:outline-none py-3  ${inputStyles}`}
              maxLength={maxLength}
              type={inputType}
              id={fieldId}
              placeholder={placeholder}
              {...inputProps}
            />
          )}

          {multiline && (
            <textarea
              rows={3}
              className={`font-sans w-full focus:outline-none py-3  ${inputStyles}`}
              placeholder={placeholder}
              {...inputProps}
            />
          )}
        </div>

        {/* Bottom border layer */}
        <div className="relative h-[1px] w-full">
          {/* muted-secondary base line */}
          <div
            className={`absolute left-0 top-0 h-[0.5px] bg-muted-secondary transition-opacity duration-300 ${
              hovered ? "opacity-0" : "opacity-100"
            }
          ${errors[fieldId] ? "bg-red-400" : ""}
          `}
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

      <div className="font-sans text-sm font-[500] text-red-400 mt-2">
        {errors[fieldId]?.message}
      </div>
    </div>
  );
};

export default InputField;
