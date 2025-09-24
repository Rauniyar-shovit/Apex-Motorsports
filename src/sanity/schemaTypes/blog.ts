import { defineType, defineField } from "sanity";

export default defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "excerpt",
      type: "text",
      title: "Excerpt",
      description: "Short summary shown in previews.",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "mainImage",
      type: "image",
      title: "Main Image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt text" }],
      validation: (R) => R.required(),
    }),
    defineField({
      name: "authorName", // ✅ just a string
      type: "string",
      title: "Author Name",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
      validation: (R) => R.required(), // ✅ Portable Text
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
      subtitle: "authorName", // show author in Studio preview
    },
  },
});
