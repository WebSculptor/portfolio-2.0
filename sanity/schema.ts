import { type SchemaTypeDefinition } from "sanity";
import projectSchema from "./schema/projectSchema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectSchema],
};
