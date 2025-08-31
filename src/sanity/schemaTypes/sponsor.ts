// /sanity/schemas/sponsor.ts
import { defineType, defineField } from "sanity";
import { LinkIcon } from "@sanity/icons";

export default defineType({
  name: "sponsor",
  title: "Sponsor",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().min(2),
    }),

    defineField({
      name: "tier",
      title: "Tier",
      type: "string",
      options: {
        list: [
          { title: "Diamond", value: "diamond" },
          { title: "Gold", value: "gold" },
          { title: "Silver", value: "silver" },
          { title: "Bronze", value: "bronze" },
          { title: "Supporter", value: "supporter" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "diamond",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "Describe the logo for screen readers.",
          validation: (Rule) => Rule.required().min(2),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "href",
      title: "Website",
      type: "url",
      icon: LinkIcon,
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const tier = context.document?.tier;
          if (tier === "diamond" && (!value || value.trim().length < 20)) {
            return "Description is required for Diamond tier sponsors (min 20 characters)";
          }
          return true;
        }),
    }),

    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower numbers appear first.",
      validation: (Rule) => Rule.min(0),
    }),
  ],

  preview: {
    select: {
      title: "name",
      media: "logo",
      tier: "tier",
      href: "href",
    },
    prepare({ title, media, tier, href }) {
      const subtitle = [tier && tier.toUpperCase(), href && "↗"]
        .filter(Boolean)
        .join(" ");
      return { title, media, subtitle };
    },
  },
});
