import { Rule } from 'sanity'

export default {
  name: 'bookCategory',
  title: 'Book Category',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Category Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().min(3).max(50),
    },{
        name: 'title',
        title: ' Title',
        type: 'string',
        validation: (Rule: Rule) => Rule.required().min(3).max(50),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: Rule) => Rule.required().min(10).max(1000),
    },
    {
      name: 'books',
      title: 'Books in this Category',
      type: 'array',
      of: [{ type: 'book' }] ,
      validation: (Rule: Rule) => Rule.min(1),
    }
  ]
}
