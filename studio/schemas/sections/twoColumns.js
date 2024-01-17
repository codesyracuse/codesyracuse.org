import {defineType, defineField} from 'sanity'
import {InlineIcon} from '@sanity/icons'

export default defineType({
  name: 'twoColumns',
  title: 'Two Column Content',
  icon: InlineIcon,
  type: 'object',
  fieldsets: [
    {
      name: 'leftContent',
      title: 'Left Column',
      description: 'If an image is chosen, the content box will not show or be rendered',
      options: {collapsible: true},
    },
    {
      name: 'rightContent',
      title: 'Right Column',
      description: 'If an image is chosen, the content box will not show or be rendered',
      options: {collapsible: true},
    },
  ],
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
      name: 'leftTitle',
      title: 'Title (optional)',
      type: 'string',
      fieldset: 'leftContent',
    }),
    defineField({
      name: 'leftImage',
      title: 'Image',
      type: 'image',
      description: 'If set, image will be used in place of Content below',
      fieldset: 'leftContent',
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          hidden: ({parent}) => !parent?.asset,
        },
      ],
    }),
    defineField({
      name: 'leftBlockContent',
      title: 'Content',
      type: 'blockContent',
      description: 'Content is only used if above Image is blank',
      fieldset: 'leftContent',
      hidden: ({parent}) => parent?.leftImage?.asset !== undefined,
    }),
    defineField({
      name: 'rightTitle',
      title: 'Title (optional)',
      type: 'string',
      fieldset: 'rightContent',
    }),
    defineField({
      name: 'rightImage',
      title: 'Image',
      type: 'image',
      description: 'If set, image will be used in place of Content below',
      fieldset: 'rightContent',
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          hidden: ({parent}) => !parent?.asset,
        },
      ],
    }),
    defineField({
      name: 'rightBlockContent',
      title: 'Content',
      type: 'blockContent',
      description: 'Content is only used if above Image is blank',
      fieldset: 'rightContent',
      hidden: ({parent}) => parent?.rightImage?.asset !== undefined,
    }),
    defineField({
      name: 'mobileDisplay',
      title: 'Mobile Size Option',
      type: 'string',
      description: 'How to display the two columns on mobile size',
      initialValue: 'leftTop',
      options: {
        list: [
          {title: 'Left on Top', value: 'leftTop'},
          {title: 'Right on Top', value: 'rightTop'},
          {title: 'Hide Left', value: 'hideLeft'},
          {title: 'Hide Right', value: 'hideRight'},
        ],
      },
    }),
    defineField({
      name: 'component',
      title: 'Component',
      description: 'a list of eligible components for this section',
      type: 'string',
      initialValue: 'TwoColumns',
      options: {
        list: [
          {title: 'Equal width columns', value: 'TwoColumns'},
          {title: 'Left is Wider', value: 'TwoColumnsLeftWider'},
          {title: 'Right is Wider', value: 'TwoColumnsRightWider'},
        ],
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
