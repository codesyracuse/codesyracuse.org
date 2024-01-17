import {defineType, defineField} from 'sanity'
import {InlineIcon} from '@sanity/icons'

export default defineType({
  name: 'features',
  title: 'Featured Blocks',
  icon: InlineIcon,
  type: 'object',
  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Internal Title (does not display)',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Page Title (optional)',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Content',
      type: 'blockContent',
    }),
    defineField({
      name: 'component',
      title: 'Component',
      description: 'a list of eligible components for this section',
      type: 'string',
      initialValue: 'Features',
      options: {
        list: [{title: 'Default', value: 'Features'}],
      },
    }),
  ],
  preview: {
    select: {
      title: 'internalTitle',
      subtitle: 'component',
    },
  },
})
