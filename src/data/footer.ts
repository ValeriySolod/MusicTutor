import type { FooterLinkGroup, SocialLink } from "@/types";

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: "For Students",
    links: [
      { label: "Find a Teacher", href: "#teacher-search" },
      { label: "Instruments", href: "#instruments" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Featured Teachers", href: "#featured-teachers" },
    ],
  },
  {
    title: "For Teachers",
    links: [
      { label: "Become a Teacher", href: "#" },
      { label: "Teacher Resources", href: "#" },
      { label: "Community Guidelines", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Facebook", href: "#", icon: "social-facebook" },
  { label: "Instagram", href: "#", icon: "social-instagram" },
  { label: "X", href: "#", icon: "social-x" },
  { label: "YouTube", href: "#", icon: "social-youtube" },
];
