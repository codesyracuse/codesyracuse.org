import {defineType, defineField} from 'sanity'
import {TextIcon} from '@sanity/icons'

export default defineType({
  name: 'pageHeader',
  title: 'Page Header',
  icon: TextIcon,
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Header Text',
      type: 'string',
    }),
    defineField({
      name: 'component',
      title: 'Component',
      description: 'a list of eligible components for this section',
      type: 'string',
      initialValue: 'PageHeader',
      options: {
        list: [{title: 'DefaultComponent', value: 'PageHeader'}],
      },
    }),
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'component',
    },
  },
})
