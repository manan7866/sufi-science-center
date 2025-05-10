// ./sanity/schemas/footer.ts
export default {
    name: 'footer',
    type: 'document',
    title: 'Footer',
    fields: [
      {
        name: 'image',
        type: 'image',
        title: 'Footer Image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'description',
        type: 'text',
        title: 'Footer Description',
      },
      {
        name: 'email',
        type: 'string',
        title: 'Contact Email',
      },
      {
        name: 'socialLinks',
        type: 'array',
        title: 'Social Media Links',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'platform',
                type: 'string',
                title: 'Platform Name',
              },
              {
                name: 'url',
                type: 'url',
                title: 'Link URL',
              },
            ],
          },
        ],
      },
      {
        name: 'sections',
        type: 'array',
        title: 'Sections',
        of: [{ type: 'footerSection' }],
          
        
      },
      {
        name: 'footerPolicy',
        title: 'Footer Policy',
        type: 'document',
        fields: [
          {
            name: 'copyright',
            title: 'Copyright',
            type: 'string',
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text',
          },
          {
            name: 'legalLinks',
            title: 'Legal Links',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                  },
                  {
                    name: 'url',
                    title: 'URL',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        ],
      }
    ],
  }
  