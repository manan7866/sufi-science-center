import { Rule } from 'sanity' 

export default {
    name: 'insightCategory',
    title: 'Insight Category',
    type: 'document',
    fields: [
      {
        name: 'category',
        title: 'Category Title',
        type: 'string',
        validation: (Rule : Rule) => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title', // title field se slug generate karega
          maxLength: 96,   // optional: slug ki max length
        },
        validation: (Rule: Rule) => Rule.required(),
      },
      
      {
        name: 'description',
        title: 'Category Description',
        type: 'text'
      },
      {
        name: 'image',
        title: 'Category Image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'books',
        title: 'Books',
        type: 'array',
        of: [{ type: 'insightCollection' }]
      },
      {
        name: 'matters',
        title: 'Matters',
        type: 'array',
        of: [{ type: 'insightMatter' }],
        validation: (Rule : Rule) => Rule.min(1).max(4)
      }
    ]
  }
  