const membershipForm = {
    name: 'membershipForm',
    title: 'Membership Form',
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
        name: 'inputFields',
        title: 'Input Fields',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'title', title: 'Title', type: 'string' },
              { name: 'inputName', title: 'Input Name', type: 'string' },
            ],
          },
        ],
      },
      {
        name: 'checkBoxField',
        title: 'Check Box Field',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'label', title: 'Label', type: 'string' },
              {
                name: 'titles',
                title: 'Titles',
                type: 'array',
                of: [{ type: 'string' }],
              },
            ],
          },
        ],
      },
      {
        name: 'textField',
        title: 'Text Field',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'label', title: 'Label', type: 'string' },
              {
                name: 'titles',
                title: 'Titles',
                type: 'array',
                of: [{ type: 'string' }],
              },
            ],
          },
        ],
      },
      {
        name: 'agreementCheckBox',
        title: 'Agreement Check Box',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'buttonName',
        title: 'Button Name',
        type: 'string',
      },
    ],
  }
  
  export default membershipForm
  