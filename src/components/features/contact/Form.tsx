"use client";
import Button from "@/components/reusable/Button";
import { FORM_FIELDS } from "@/constants";
import { ContactFormValues } from "@/models";
import { CircleAlert, Mail, Pencil, Phone, User } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BsSend } from "react-icons/bs";
import InputField from "./InputField";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>();

  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col  gap-4 md:gap-8"
      >
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 md:gap-8">
          <InputField
            fieldId={FORM_FIELDS.name.id}
            errors={errors}
            register={register}
            label={FORM_FIELDS.name.label}
            icon={User}
            placeholder={FORM_FIELDS.name.placeholder}
          />

          <InputField
            icon={Mail}
            fieldId={FORM_FIELDS.email.id}
            errors={errors}
            register={register}
            label={FORM_FIELDS.email.label}
            placeholder={FORM_FIELDS.email.placeholder}
            customValidation={{
              value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
              message: "Please enter a valid email",
            }}
          />
        </div>
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row  gap-6 md:gap-8">
          <InputField
            icon={Phone}
            fieldId={FORM_FIELDS.phone.id}
            errors={errors}
            register={register}
            label={FORM_FIELDS.phone.label}
            placeholder={FORM_FIELDS.phone.placeholder}
            inputType="tel"
            customValidation={{
              value:
                /^\+?(\d{1,4})?[\s.-]?\(?\d{1,4}\)?[\s.-]?\d{1,4}[\s.-]?\d{1,4}$/,
              message: "Please enter a valid mobile number",
            }}
          />
          <InputField
            icon={CircleAlert}
            fieldId={FORM_FIELDS.subject.id}
            errors={errors}
            register={register}
            label={FORM_FIELDS.subject.label}
            placeholder={FORM_FIELDS.subject.placeholder}
            inputType="text"
            customValidation={{
              value: /^.{3,}$/,
              message: "Subject must be at least 3 characters long",
            }}
          />
        </div>
        <InputField
          multiline={true}
          fieldId={FORM_FIELDS.message.id}
          errors={errors}
          register={register}
          placeholder={FORM_FIELDS.message.placeholder}
          label={FORM_FIELDS.message.label}
          icon={Pencil}
          inputType="text"
          customValidation={{
            value: /^.{10,}$/, // at least 10 characters
            message: "Message must be at least 10 characters long",
          }}
        />
        <div>
          <Button
            btnType="submit"
            title={"Get in touch"}
            icon={BsSend}
            btnStyles="px-8 py-3 md:px-9 md:py-4  bg-secondary  hover:shadow-primary text-white mt-16 "
            beforeStyles="before:bg-primary"
          />
        </div>
      </form>
    </>
  );
};

export default Form;
