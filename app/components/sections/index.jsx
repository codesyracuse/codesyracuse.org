import { Content, FullWidthContent } from "./Content";
import { Donation } from "./Donation";
import { Faq } from "./Faq";
import { Features } from "./Features";
import { Hero, BoringHero } from "./Hero";
import { Image, NoBorderImage } from "./Image";
import { PageHeader } from "./PageHeader";
import { TeamMembers } from "./TeamMembers";
import { Testimonials } from "./Testimonials";
import {
  TwoColumnContent,
  TwoColumnContentLeftWider,
  TwoColumnContentRightWider,
} from "./TwoColumnContent";

const COMPONENTS = {
  BoringHero: BoringHero,
  Content: Content,
  Donation: Donation,
  Faq: Faq,
  Features: Features,
  FullWidthContent: FullWidthContent,
  Hero: Hero,
  Image: Image,
  NoBorderImage: NoBorderImage,
  PageHeader: PageHeader,
  TeamMembers: TeamMembers,
  Testimonials: Testimonials,
  TwoColumnContent: TwoColumnContent,
  TwoColumnContentLeftWider: TwoColumnContentLeftWider,
  TwoColumnContentRightWider: TwoColumnContentRightWider,
};

const getComponent = (sectionName) => {
  return COMPONENTS[sectionName];
};

export function Section({ component, ...rest }) {
  const SectionComponent = getComponent(component);
  if (!SectionComponent) {
    console.log("undefined section: ", component);
    return null;
  }
  return <SectionComponent {...rest} />;
}
