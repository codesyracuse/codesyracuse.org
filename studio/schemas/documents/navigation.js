import {LinkIcon} from '@sanity/icons'

export default {
  name: 'navigation',
  icon: LinkIcon,
  type: 'document',
  title: 'Navigation',
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Name',
      readOnly: true,
    },
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'array',
      name: 'sections',
      title: 'Navigation Groups',
      of: [{type: 'navigation.section'}, {type: 'navigation.link'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
