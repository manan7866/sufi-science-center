export default {
    name: 'beginnerChecklist',
    title: 'Beginner Checklist',
    type: 'document',
    fields: [
      {
        name: 'heading',
        title: 'Heading',
        type: 'string',
      },
      {
        name: 'subheading',
        title: 'Subheading',
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
        name: 'checkForms',
        title: 'Check Forms',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'checkForm',
            title: 'Check Form',
            fields: [
              {
                name: 'label',
                title: 'Label',
                type: 'string',
              },
              {
                name: 'checkboxes',
                title: 'Checkboxes',
                type: 'array',
                of: [
                  {
                    type: 'string',
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'bottomHeading',
        title: 'Bottom Heading',
        type: 'string',
      },
      {
        name: 'bottomDescription',
        title: 'Bottom Description',
        type: 'text',
      },
      {
        name: 'bottomNote',
        title: 'Bottom Note',
        type: 'text',
      },
    ]
  }
  