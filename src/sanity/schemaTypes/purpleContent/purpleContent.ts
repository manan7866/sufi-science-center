// ./schemas/purpleContent.ts

export default {
    name: 'purpleContent',
    title: 'Purple Content',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'purpleSection',
            title: 'Purple Section',
            fields: [
              {
                name: 'heading',
                title: 'Heading',
                type: 'string',
              },
              {
                name: 'description',
                title: 'Description',
                type: 'text', // ya 'block' agar aapko rich text chahiye
              },
              {
                name: 'bottomHeading',
                title: 'Bottom Heading',
                type: 'string',
              },
              {
                name : 'buttonField',
                title : 'Button Field',
                type : 'array',
                of : [
                  {
                    name : 'buttonName',
                    title : 'Button Name',
                    type : 'string',
                  },
                  {
                    name : 'buttonUrl',
                    title : 'Button Url',
                    type : 'url'
                  }
                ]

              },
              {
                name: 'bottomContent',
                title: 'Bottom Content',
                type: 'array',
                of: [
                  {
                    type: 'text', // ya 'block' agar rich text chahiye
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  }
  