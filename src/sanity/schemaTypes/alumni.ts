import { defineType, defineField } from "sanity";

export default defineType({
  name: "alumni",
  title: "Alumni",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Full Name",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "profileImage",
      type: "image",
      title: "Profile Image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt text" }],
      validation: (R) => R.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "name", maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "email",
      type: "string",
      title: "Email",
      validation: (R) => R.required().email(),
    }),
    defineField({
      name: "linkedin",
      type: "url",
      title: "LinkedIn",
      description: "Public LinkedIn profile link",
      validation: (R) =>
        R.uri({
          scheme: ["http", "https"],
        }),
    }),
    defineField({
      name: "bio",
      type: "blockContentParagraph",
      title: "Short Bio",
      description: "A brief intro shown in cards and previews.",
      validation: (R) => R.required(),
    }),

    defineField({
      name: "role",
      type: "string",
      title: "Role / Position",
      description: "Current or last held professional role.",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "experience",
      type: "string",
      title: "Experience",
      description:
        "Years of experience or professional summary (e.g., 5+ years in Web Development).",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "myStory",
      type: "blockContentParagraph",
      title: "My Story",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "Contributions",
      type: "array",
      title: "Systems Worked On",
      of: [
        {
          type: "object",
          name: "system",
          title: "System",
          fields: [
            {
              name: "systemTitle",
              type: "string",
              title: "System Title",
              validation: (R) => R.required(),
            },
            {
              name: "systemDescription",
              type: "blockContentParagraph",
              title: "System Description",
              description: "Overview of the system itself.",
            },
            {
              name: "myContribution",
              type: "blockContentParagraph",
              title: "My Contribution",
              description:
                "Explain what you personally contributed to this system.",
            },
            {
              name: "image",
              type: "image",
              title: "Image",
              options: { hotspot: true },
              fields: [{ name: "alt", type: "string", title: "Alt text" }],
            },
          ],
          preview: {
            select: {
              title: "systemTitle",
              subtitle: "myContribution",
              media: "image",
            },
          },
        },
      ],
    }),
    defineField({
      name: "learningsAndExperience",
      type: "blockContentParagraph",
      title: "Learnings and Experience",
      description: "Key takeaways and professional experiences.",
      validation: (R) => R.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "email",
      media: "profileImage",
    },
  },
});
