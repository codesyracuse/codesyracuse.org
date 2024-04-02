import {DocumentsIcon} from '@sanity/icons'

export default {
  name: 'page',
  title: 'Pages',
  icon: DocumentsIcon,
  type: 'document',
  groups: [
    {
      name: 'sections',
      title: 'Page Sections',
      default: true,
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    {
      name: 'internalTitle',
      title: 'Page Title (displayed in browser tabs, important for search engines)',
      type: 'string',
      group: 'seo',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'string',
      group: 'seo',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      group: 'sections',
      sortable: true,
      of: [
        {type: 'pageHeader'},
        {type: 'content'},
        {type: 'twoColumnContent'},
        {type: 'donation'},
        {type: 'faq'},
        {type: 'hero'},
        {type: 'inlineImage'},
        {type: 'teamMembers'},
        {type: 'testimonials'},
      ],
    },
  ],
  orderings: [
    {
      title: 'Path',
      name: 'pathAsc',
      by: [{field: 'slug.current', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'internalTitle',
      slug: 'slug.current',
    },
    prepare(selection) {
      const {title, slug} = selection
      return {
        title: title,
        subtitle: slug === '/' ? slug : `/${slug}`,
      }
    },
  },
}
