/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
import {LaunchIcon, LinkIcon} from '@sanity/icons'
import {defineType} from 'sanity'
import ExternalLinkRenderer from '../components/ExternalLinkRenderer'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'External link',
            icon: LaunchIcon,
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ['http', 'https', 'mailto', 'tel'],
                  }),
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                initialValue: true,
                description: 'Read https://css-tricks.com/use-target_blank/',
                type: 'boolean',
              },
            ],
            components: {
              annotation: ExternalLinkRenderer,
            },
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            icon: LinkIcon,
            fields: [
              {
                title: 'Display as button?',
                name: 'button',
                description: 'if not checked, display as text link',
                initialValue: false,
                type: 'boolean',
              },
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [
                  {type: 'page'},
                  // other types you may want to link to
                ],
                options: {
                  disableNew: true,
                },
              },
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          desctiption: 'optional',
          hidden: ({parent}) => !parent?.asset,
        },
      ],
    },
  ],
})
