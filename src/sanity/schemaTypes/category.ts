import { defineType, defineField } from "sanity";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
  ],
});
