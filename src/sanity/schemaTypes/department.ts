import { defineField, defineType } from "sanity";

export default defineType({
  name: "department",
  title: "Department",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Department Name",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("Department name is required"),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
});
