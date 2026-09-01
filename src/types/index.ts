export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  icon: string;
}

export interface BenefitItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface InstrumentItem {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  photo: string;
  photoWidth: number;
  photoHeight: number;
}

export interface TeacherItem {
  id: string;
  name: string;
  role: string;
  roleIcon: string;
  rating: string;
  description: string;
  price: string;
  format: string;
  isFavorite: boolean;
  photo: string;
  photoWidth: number;
  photoHeight: number;
}

export interface StepItem {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface WhyPointItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}
