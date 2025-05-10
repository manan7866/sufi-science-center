const contentChart = {
    name: 'contentChart',
    title: 'Content Chart',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'heading',
        title: 'Heading',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      {
        name: 'subCharts',
        title: 'Sub Charts',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'subChart',
            fields: [
              {
                name: 'heading',
                title: 'Heading',
                type: 'string'
              },
              {
                name: 'description',
                title: 'Description',
                type: 'text'
              },
              {
                name: 'guide',
                title: 'Guide',
                type: 'object',
                fields: [
                  {
                    name: 'title',
                    title: 'Title',
                    type: 'string'
                  },
                  {
                    name: 'linkage',
                    title: 'Linkage',
                    type: 'array',
                    of: [
                      {
                        type: 'object',
                        name: 'link',
                        fields: [
                          {
                            name: 'title',
                            title: 'Title',
                            type: 'string'
                          },
                          {
                            name: 'pageUrl',
                            title: 'Page URL',
                            type: 'url'
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
  
  export default contentChart
  