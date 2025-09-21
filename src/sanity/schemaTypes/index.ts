import { type SchemaTypeDefinition } from "sanity";
import sponsor from "./sponsor";
import achievements from "./achievements";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [sponsor, achievements],
};
