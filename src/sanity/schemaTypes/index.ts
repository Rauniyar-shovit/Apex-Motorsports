import { type SchemaTypeDefinition } from "sanity";
import sponsor from "./sponsor";
import achievements from "./achievement";
import blockContent from "./blockContent";
import category from "./category";
import blog from "./blog";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [sponsor, achievements, blog, blockContent, category],
};
