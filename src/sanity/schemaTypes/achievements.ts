// /sanity/schemas/achievement.ts
import IconPicker from "@/components/reusable/IconPicker";
import { defineType, defineField } from "sanity";
import { ACHIEVEMENTS_ICONS } from "../constants";
export default defineType({
  name: "achievements",
  title: "Achievements",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(2),
    }),

    defineField({
      name: "ranking",
      title: "Ranking",
      description: "Placement value (e.g., 1st, 2nd, 3rd, 4th, 10th)",
      type: "string",
      validation: (Rule) =>
        Rule.custom((value) => {
          if (!value) return true;
          return (
            /^\d+(st|nd|rd|th)$/i.test(value) ||
            "Provide a valid ranking like '1st', '2nd', '10th'"
          );
        }),
    }),

    // Option A: icon by name (to map in frontend to lucide-react)
    defineField({
      name: "iconName",
      title: "Icon",
      type: "string",
      components: {
        input: IconPicker,
      },
      validation: (Rule) =>
        Rule.required().custom((v) =>
          !v || Object.keys(ACHIEVEMENTS_ICONS).includes(v)
            ? true
            : "Pick an icon"
        ),
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first.",
      initialValue: 0,
      validation: (Rule) => Rule.min(0).integer(),
    }),
  ],

  preview: {
    select: {
      title: "title",
      ranking: "ranking",
      order: "order",
      iconName: "iconName",
    },
    prepare({ title, ranking, order, iconName }) {
      const chips = [
        ranking || null,
        iconName ? `Icon:${iconName}` : null,
        Number.isFinite(order) ? `#${order}` : null,
      ].filter(Boolean);
      return {
        title,
        subtitle: chips.join(" • "),
      };
    },
  },
});
