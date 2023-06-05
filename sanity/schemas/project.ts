export default {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "alt",
      title: "Alt",
      type: "string",
    },
    {
      name: "demolink",
      title: "Demo Link",
      type: "string",
    },
    {
      name: "githublink",
      title: "Gtihub Link",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "techstack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
