import { createClient } from "@sanity/client";

export default createClient({
  projectId: process.env.SANITY_PROJECTID,
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-06-10",
});
