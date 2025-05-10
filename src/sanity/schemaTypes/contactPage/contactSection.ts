const contactSection = {
  name: 'contactSection',
  title: 'Contact Section',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'inputFields',
      title: 'Input Fields',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'inputField',
          title: 'Input Field',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Text', value: 'text' },
                  { title: 'Long Text', value: 'longtext' },
                ],
              },
            },
          ],
        },
      ],
    },
  ],
};

export default contactSection;
