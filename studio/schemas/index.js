/*
 * Notes on Schema
 * Sections should live in sections/
 * If you'd like an icon for the UI, check https://icons.sanity.build/all?scheme=dark
 *
 */
import address from './objects/address'
import blockContent from './objects/blockContent'
import donation from './sections/donation'
import faq from './sections/faq'
import hero from './sections/hero'
import image from './sections/image'
import navigation from './documents/navigation'
import navigationLink from './objects/navigationLink'
import navigationSection from './objects/navigationSection'
import content from './sections/content'
import page from './documents/page'
import pageHeader from './sections/pageHeader'
import person from './documents/person'
import qa from './objects/qa'
import siteConfig from './documents/siteConfig'
import teamMember from './objects/teamMember'
import teamMembers from './sections/teamMembers'
import testimonial from './objects/testimonial'
import testimonials from './sections/testimonials'
import twoColumnContent from './sections/twoColumnContent'

export const schemaTypes = [
  address,
  blockContent,
  content,
  donation,
  faq,
  hero,
  image,
  navigation,
  navigationLink,
  navigationSection,
  page,
  pageHeader,
  person,
  qa,
  siteConfig,
  teamMember,
  teamMembers,
  testimonial,
  testimonials,
  twoColumnContent,
]
