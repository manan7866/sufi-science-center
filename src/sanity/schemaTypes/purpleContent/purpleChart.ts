// ./schemas/purpleChart.ts

export default {
    name: 'purpleChart',
    title: 'Purple Chart',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'heading',
        title: 'Heading',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text', 
      },
      {
        name: 'subChart',
        title: 'Sub Chart',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'subChartItem',
            title: 'Sub Chart Item',
            fields: [
              {
                name: 'subHeading',
                title: 'Sub Heading',
                type: 'string',
              },
              {
                name: 'subDescription',
                title: 'Sub Description',
                type: 'text', 
              },
            ],
          },
        ],
      },

      
    ],
  }
  