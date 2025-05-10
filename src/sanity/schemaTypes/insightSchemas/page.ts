// schemas/insightPage.ts
import { Rule } from 'sanity' 

export default {
    name: 'insightPage',
    title: 'Insight Page',
    type: 'object',
    fields: [
      {
        name: 'mainContent',
        title: 'Main Content',
        type: 'text',
        validation: (Rule : Rule) => Rule.required().min(10)
      },
      {
        name: 'paragraphs',
        title: 'Paragraphs',
        type: 'array',
        of: [{ type: 'text' }],
        validation: (Rule : Rule) => Rule.min(1)
      }
    ]
  }
  