import { defineType, defineField } from "sanity";
import { DEPARTMENT_CATEGORIES } from "../constants";

export default defineType({
  name: "department",
  title: "Department",
  type: "document",
  fields: [
    // Free text for department name
    defineField({
      name: "name",
      title: "Department Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    // Category selection
    defineField({
      name: "category",
      title: "Department Category",
      type: "string",
      options: {
        list: Object.values(DEPARTMENT_CATEGORIES),
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),

    // Optional description
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Short description about this department",
    }),

    // Order field
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Set the display order of the department",
      validation: (Rule) => Rule.required().integer().min(1),
    }),
  ],

  preview: {
    select: {
      departmentName: "name",
      departmentCategory: "category",
      order: "order",
    },
    prepare(selection) {
      const { departmentName, departmentCategory } = selection;
      return {
        title: `${departmentName}`,
        subtitle: departmentCategory
          ? departmentCategory.charAt(0).toUpperCase() +
            departmentCategory.slice(1)
          : "No Category",
      };
    },
  },
});
