import {BlockElementIcon} from '@sanity/icons'

export default {
  name: 'hero',
  title: 'Hero',
  icon: BlockElementIcon,
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
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required().assetRequired(),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'cta',
      title: 'CTA Button',
      description: 'Call to Action (Click Through Button)',
      type: 'navigation.link',
    },
    {
      name: 'secondaryCta',
      title: 'Second call to action',
      type: 'navigation.link',
    },
    {
      name: 'component',
      title: 'Component',
      description: 'a list of eligible components for this section',
      type: 'string',
      initialValue: 'Hero',
      options: {
        list: [{title: 'Default Component', value: 'Hero'}],
        list: [{title: 'Not as colorful', value: 'BoringHero'}],
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
