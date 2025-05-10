import { Rule } from 'sanity' 
// schemas/insightCollection.ts
export default {
    name: 'insightCollection',
    title: 'Insight Collection',
    type: 'object',
    fields: [
      {
        name: 'sections',
        title: 'Sections',
        type: 'array',
        of: [{ type: 'insightSection' }],
        validation: (Rule : Rule) => Rule.min(1)
      },{
        name : 'slug',
        title: 'Slug',
        type: 'string',
      }
      
    ]
  }
  