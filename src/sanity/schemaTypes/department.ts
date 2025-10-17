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
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower numbers appear first when listing departments",
      validation: (Rule) =>
        Rule.min(1).integer().error("Order must be a positive whole number"),
      initialValue: 1,
    }),
  ],
});
