const registrationForm = {
    name: 'registrationForm',
    title: 'Registration Form',
    type: 'document',
    fields: [
      {
        name: 'note',
        title: 'Note',
        type: 'string',
      },
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
        name: 'registrationFields',
        title: 'Registration Fields',
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
                name: 'inputFields',
                title: 'Input Fields',
                type: 'array',
                of: [
                  {
                    type: 'object',
                    fields: [
                      {
                            name: 'heading',
                            title : 'Heading',
                            type : 'string'
                      },
                      {
                        name: 'title',
                        title: 'Title',
                        type: 'string',
                      },
                      {
                        name: 'inputName',
                        title: 'Input Name',
                        type: 'string',
                      },
                      {
                        name: 'inputType',
                        title: 'Input Type',
                        type: 'string',
                        options: {
                          list: ['text', 'longtext'],
                        },
                      },
                    ],
                  },
                ],
              },
              {
                name: 'listInputFields',
                title: 'List Input Fields',
                type: 'array',
                of: [
                  {
                    type: 'object',
                    fields: [
                      {
                            name: 'heading',
                            title : 'Heading',
                            type : 'string'
                      },
                      {
                        name: 'title',
                        title: 'Title',
                        type: 'string',
                      },
                      {
                        name: 'listInputName',
                        title: 'List Input Name',
                        type: 'string',
                      },
                      {
                        name: 'options',
                        title: 'Options',
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
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'buttonName',
        title: 'Button Name',
        type: 'string',
      },
    ],
  }
  
  export default registrationForm
  