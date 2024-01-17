export default {
  name: 'quotes',
  title: 'Quotes',
  type: 'object',
  fields: [
    {
      name: 'internalTitle',
      title: 'Internal Title (does not display)',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Display Title (optional)',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Content',
      type: 'blockContent',
    },

    {
      name: 'component',
      title: 'Component',
      description: 'a list of eligible components for this section',
      type: 'string',
      initialValue: 'Quotes',
      options: {
        list: [{title: 'Default Component', value: 'Quotes'}],
      },
    },
  ],
  preview: {
    select: {
      title: 'internalTitle',
      subtitle: 'component',
    },
  },
}
