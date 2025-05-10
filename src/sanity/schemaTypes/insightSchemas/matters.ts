import { Rule } from 'sanity' 
export default {
    name: 'insightMatter',
    title: 'Insight Matter',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Matter Title',
        type: 'string',
        description: 'e.g. Sayings, Reflections, Stories, Thoughts',
        validation: (Rule : Rule) => Rule.required()
      },
      {
        name: 'sections',
        title: 'Sections',
        type: 'string',
       
        validation: (Rule : Rule) => Rule.min(1)
      }
    ]
  }
  