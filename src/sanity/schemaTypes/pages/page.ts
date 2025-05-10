// // ./sanity/schemas/page.ts
// export default {
//     name: 'page',
//     type: 'document',
//     title: 'Page',
//     fields: [
//       {
//         name: 'title',
//         type: 'string',
//         title: 'Page Title',
//       },
//       {
//         name: 'slug',
//         type: 'slug',
//         title: 'Slug',
//         options: {
//           source: 'title',
//           maxLength: 96,
//         },
//       },
//       {
//         name: 'content',
//         type: 'array',
//         title: 'Content Blocks',
//         of: [
//           {
//             type: 'pageContent',
//           },
//         ],
//       }
//     ],
//   }
  
// import { defineType } from 'sanity';

// export default defineType({
//   name: 'page',
//   type: 'document',
//   title: 'Page',
//   fields: [
//     {
//       name: 'typeSelector',
//       type: 'string',
//       title: 'Content Type Selector',
//       options: {
//         list: [
//           { title: 'Goal Section', value: 'goalSection' },
//           { title: 'Complex Content Block', value: 'complexContentBlock' },
//         ],
//       },
//     },
//     {
//       name: 'goalSections',
//       type: 'array',
//       title: 'Goal Sections',
//       hidden: ({ document }) => document?.typeSelector !== 'goalSection',
//       of: [{ type: 'goalSection' }],
//     },
//     {
//       name: 'complexContentBlocks',
//       type: 'array',
//       title: 'Complex Content Blocks',
//       hidden: ({ document }) => document?.typeSelector !== 'complexContentBlock',
//       of: [{ type: 'complexContentBlock' }],
//     },
//   ],
// });

import { defineType } from 'sanity';

export default defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'contentSections',
      type: 'array',
      title: 'Content Sections',
      of: [
        {
          type: 'object',
          name: 'typeSelectorBlock',
          title: 'Content Block',
          fields: [
            {
              name: 'type',
              type: 'string',
              title: 'Section Type',
              options: {
                list: [
                  { title: 'Goal Section', value: 'goalSection' },
                  { title: 'Complex Content Block', value: 'complexContentBlock' },
                ],
                layout: 'dropdown',
              },
            },
            {
              name: 'goalSection',
              type: 'goalSection',
              hidden: ({ parent }) => parent?.type !== 'goalSection',
            },
            {
              name: 'complexContentBlock',
              type: 'complexContentBlock',
              hidden: ({ parent }) => parent?.type !== 'complexContentBlock',
            },
          ],
        },
      ],
    },
  ],
});
