import {BlockElementIcon} from '@sanity/icons'

export default {
  name: 'hero',
  title: 'Hero',
  icon: BlockElementIcon,
  type: 'object',
  fields: [
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
      initialValue: 'BoringHero',
      options: {
        list: [{title: 'Home Hero', value: 'Hero'}],
        list: [{title: 'Image based Hero', value: 'BoringHero'}],
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'component',
    },
  },
}
