export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
      {
        name: "title",
        type: "string",
      },
      {
        name: "date",
        type: "datetime",
      },
      {
        name: "place",
        type: "string",
        options: {
          list: [
            { value: "full sun", title: "Full Sun" },
            { value: "partial sun", title: "Partial Sun" },
            { value: "partial shadow", title: "Partial Shadow" },
            { value: "full shadow", title: "Full Shadow" },
          ],
        },
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: "description",
        type: "text",
      },
      {
        name: "watering",
        title: "Watering",
        type: "string",
        options: {
          list: [
            { value: "low", title: "Low" },
            { value: "average", title: "Average" },
            { value: "high", title: "High" },
          ],
        },
      },
      {
        name: "link",
        type: "url",
      },
      {
        name: "tags",
        type: "array",
        of: [
          {
            type: "string",
          },
        ],
        options: {
          layout: "tags",
        },
      },
    ],
  };