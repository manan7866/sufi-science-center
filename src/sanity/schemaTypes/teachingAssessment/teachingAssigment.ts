// schemas/teachingAssessment.ts
const teachingAssessment = {
    name: 'teachingAssessment',
    title: 'Teaching Assessment',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Field Title',
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
        name: 'inputs',
        title: 'Inputs',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'inputObject',
            title: 'Input Object',
            fields: [
              {
                name: 'inputName',
                title: 'Input Name',
                type: 'string',
              }
            ]
          }
        ]
      }
      ,
      {
        name: 'listInputs',
        title: 'List Inputs',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'listInput',
            title: 'List Input',
            fields: [
              {
                name: 'title',
                title: 'Title',
                type: 'string',
              },
              {
                name: 'options',
                title: 'Options',
                type: 'array',
                of: [{ type: 'string' }],
              },
            ],
          },
        ],
      },
      {
        name: 'assignments',
        title: 'Assignments',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'assignment',
            title: 'Assignment',
            fields: [
              {
                name: 'title',
                title: 'Title',
                type: 'string',
              },
              {
                name: 'paragraph',
                title: 'Paragraph',
                type: 'text',
              },
              {
                name: 'ranks',
                title: 'Ranks',
                type: 'array',
                of: [{ type: 'string' }], // multiple titles
              },
              {
                name: 'range',
                title: 'Range',
                type: 'number',
                validation: (Rule: any) => Rule.min(1).max(100),
              },
            ],
          },
        ],
      },
      {
        name: 'finalAssignment',
        title: 'Final Assignment',
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
          },
          {
            name: 'message',
            title: 'Message',
            type: 'text',
          },
        ],
      },
    ],
  };
  
  export default teachingAssessment;
  