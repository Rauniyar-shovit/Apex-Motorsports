import { defineField, defineType } from "sanity";
import { decodeAssetId } from "../lib/utils";

export default defineType({
  name: "team",
  title: "Team",
  type: "document",
  fields: [
    defineField({
      name: "profileImage",
      type: "image",
      title: "Profile Image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt text" }],
      validation: (Rule) =>
        Rule.required().custom((image) => {
          if (!image) return true; // required() already handles empty case

          if (!image.asset || !image.asset._ref) {
            return "Image asset reference not found";
          }

          const { dimensions } = decodeAssetId(image.asset._ref);
          const { width, height } = dimensions;

          if (width < 400) {
            return "Image must be at least 500px wide";
          }

          if (height <= width) {
            return "Image must be portrait (height should be greater than width)";
          }

          return true;
        }),
    }),
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required().min(2).error("Name is required"),
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      validation: (Rule) =>
        Rule.required()
          .min(10)
          .custom((value) => {
            if (!value) return true; // required() already handles empty case

            // Count words
            const wordCount = value.trim().split(/\s+/).length;
            if (wordCount > 45) {
              return "Bio must not exceed 45 words";
            }

            return true;
          }),
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn Profile",
      type: "url",
      validation: (Rule) =>
        Rule.uri({ scheme: ["http", "https"] }).error(
          "Must be a valid LinkedIn URL"
        ),
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      validation: (Rule) =>
        Rule.regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
          name: "email",
          invert: false,
        }).error("Please enter a valid email address"),
    }),
    defineField({
      name: "department",
      title: "Department",
      type: "reference",
      to: [{ type: "department" }],
      validation: (Rule) => Rule.required().error("Select a department"),
    }),
  ],
});
