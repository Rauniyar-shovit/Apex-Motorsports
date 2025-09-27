import { defineType, defineField } from "sanity";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
    }),
  ],
  validation: (Rule) =>
    Rule.custom(async (_, context) => {
      const { getClient } = context;
      const client = getClient({ apiVersion: "2025-09-25" }); // today’s date
      const count = await client.fetch(`count(*[_type == "category"])`);
      if (count > 10) {
        return "You can only add up to 10 categories.";
      }
      return true;
    }),
});
