export default {
  name: 'navigation.link',
  type: 'object',
  title: 'Link',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
      description: 'Override title from the target article.',
    },
    {
      type: 'reference',
      name: 'target',
      title: 'Target page',
      to: [{type: 'page'}],
      options: {
        disableNew: true,
      },
    },
    {
      type: 'string',
      name: 'path',
      title: 'Path',
      description: 'use a path instead of a Page: ex: /shop/books',
      hidden: ({parent}) => parent?.target !== undefined,
    },
    {
      type: 'array',
      name: 'children',
      title: 'Children',
      of: [{type: 'navigation.link'}],
      hidden: true,
    },
  ],
  preview: {
    select: {
      title: 'title',
      targetTitle: 'target.title',
      targetInternalTitle: 'target.internalTitle',
      path: 'path',
      slug: 'target.slug',
    },
    prepare: ({title, slug, path, targetTitle, targetInternalTitle}) => ({
      title: title || targetTitle || targetInternalTitle,
      subtitle: slug ? `/${slug?.current}` : `${path ? path : ''}`,
    }),
  },
}
