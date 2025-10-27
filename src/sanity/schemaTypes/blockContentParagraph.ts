import { defineType, defineArrayMember } from "sanity";

export default defineType({
  name: "blockContentParagraph",
  title: "Paragraph Only",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      // Only keep "Normal" — removes headings/lists
      styles: [{ title: "Paragraph", value: "normal" }],
      lists: [], // no bullet or numbered lists
      marks: {
        decorators: [
          { title: "Bold", value: "strong" },
          { title: "Italic", value: "em" },
        ],
      },
    }),
  ],
});
