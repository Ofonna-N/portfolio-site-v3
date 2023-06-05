import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
// import {visionTool} from '@sanity/vision'
import { schemaTypes } from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;

export default defineConfig({
  name: "default",
  title: "portfolio-site",
  basePath: "/admin", // <-- important that `basePath` matches the route you're mounting your studio from, it applies to both `/pages` and `/app
  projectId,
  dataset: "production",

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
