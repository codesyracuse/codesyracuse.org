import {BlockContentIcon} from '@sanity/icons'

export default {
  name: 'content',
  icon: BlockContentIcon,
  title: 'Content',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Display Title (optional)',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
    {
      name: 'component',
      title: 'Component',
      description: 'a list of eligible components for this section',
      type: 'string',
      initialValue: 'Content',
      options: {
        list: [
          {title: 'Default Component', value: 'Content'},
          {title: 'No Padding Content', value: 'FullWidthContent'},
        ],
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      content: 'content',
      subtitle: 'component',
    },
    prepare(value) {
      const content = (value.content || []).find((content) => content._type === 'block')
      const contentTitle = value.title
      return {
        title: contentTitle
          ? contentTitle
          : content
            ? content.children
                .filter((child) => child._type === 'span')
                .map((span) => span.text)
                .join('')
            : 'No title',
        subtitle: 'Content Section',
      }
    },
  },
}
