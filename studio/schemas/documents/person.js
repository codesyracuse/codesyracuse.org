import {UsersIcon} from '@sanity/icons'

export default {
  name: 'person',
  title: 'People',
  type: 'document',
  icon: UsersIcon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Please use "Firstname Lastname" format',
      validation: (Rule) => [
        Rule.required(),
        Rule.custom((name) => {
          return name.startsWith(' ') ? 'Cannot start with a space' : true
        }).error(),
      ],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        // https://www.sanity.io/schemas/easy-peasy-url-slug-d2400b42
        source: 'name',
        maxLength: 100,
        slugify: (input) =>
          input
            .toLowerCase()
            //Remove spaces
            .replace(/\s+/g, '-')
            //Remove special characters
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ''),
        validation: (Rule) => Rule.required(),
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().assetRequired(),
    },
  ],
  preview: {
    select: {title: 'name', media: 'image', subtitle: 'role'},
  },
}
