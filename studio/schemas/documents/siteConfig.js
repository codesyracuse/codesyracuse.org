import {CogIcon} from '@sanity/icons'

export default {
  name: 'siteConfig',
  type: 'document',
  icon: CogIcon,
  title: 'Site Settings',
  groups: [
    {
      name: 'setup',
      title: 'Setup',
    },
    {
      name: 'navigation',
      title: 'Navigation',
    },
  ],
  fields: [
    {
      title: 'Main Navigation',
      name: 'mainNavigation',
      description: 'Select pages for the top menu',
      type: 'reference',
      to: {type: 'navigation'},
      group: 'navigation',
    },
    {
      title: 'Footer Navigation',
      name: 'footerNavigation',
      description: 'Select pages for the bottom links',
      type: 'reference',
      to: {type: 'navigation'},
      group: 'navigation',
    },
  ],
  preview: {
    select: {
      title: 'companyInformation.companyName',
    },
    prepare(selection) {
      return {
        title: selection.title,
      }
    },
  },
}
