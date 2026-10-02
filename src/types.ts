export interface CourseItem {
  id: string;
  number: string;
  displayNumber: string;
  badgeLabel?: string;
  name: string;
  tabLabel?: string;
  subtitle: string;
  headline: string;
  description: string;
  whereWeLookHeading?: string;
  focusPoints: string[];
  shift?: {
    from: string;
    to: string;
  };
  courseFormat: string;
  highlights?: {
    format: string;
    duration: string;
    requirement: string;
  };
  closing: string;
  programInfo?: {
    duration: string;
    format: string;
    type: string;
  };
  ctaText: string;
  image: string;
  imageAlt: string;
  accentQuote?: string;
  bonus?: {
    title: string;
    tag: string;
  };
  pricing?: {
    originalPrice?: string;
    offerPrice: string;
    tag?: string;
  };
}

export interface FAQSectionItem {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  flow?: string;
  callout?: string;
}

export interface FAQItem {
  id: string;
  number: string;
  question: string;
  course: string;
  intro: string[];
  sections: FAQSectionItem[];
  answer?: string;
}

export interface TransformationItem {
  from: string;
  to: string;
}

export interface PillarItem {
  number: string;
  title: string;
  description: string;
}
