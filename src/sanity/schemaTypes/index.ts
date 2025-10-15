import { type SchemaTypeDefinition } from "sanity";
import sponsor from "./sponsor";
import achievement from "./achievement";
import blockContent from "./blockContent";
import category from "./category";
import blog from "./blog";
import alumni from "./alumni";
import blockContentParagraph from "./blockContentParagraph";
import team from "./team";
import department from "./department";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    sponsor,
    achievement,
    blog,
    blockContent,
    category,
    alumni,
    blockContentParagraph,
    team,
    department,
  ],
};
