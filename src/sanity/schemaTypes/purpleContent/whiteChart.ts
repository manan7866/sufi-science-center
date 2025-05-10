export default {
    
        name: 'whiteChart',
        title: 'White Chart',
        type: 'document',
        fields : [
          {
            type: 'object',
            name: 'bottomChartItem',
            title: 'Bottom Chart Item',
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
                type: 'object',
                fields: [
                  {
                    name: 'subTitle',
                    title: 'Sub Title',
                    type: 'array',
                    of: [{ type: 'string' }],
                  }
                ]
              },
              {
                name : 'note',
                title : 'Note',
                type : 'string'
              }
            ]
          }
        ]
      
      
}