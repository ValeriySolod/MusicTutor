import type { FooterLinkGroup, SocialLink } from "@/types";

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: "Platform",
    links: [
      { label: "Teachers", href: "#featured-teachers" },
      { label: "Lessons", href: "#instruments" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "For Teachers", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Refund Policy", href: "#" },
    ],
  },
];

export const NEWSLETTER_COPY = {
  title: "Newsletter",
  description: "Get tips, updates and special offers.",
  placeholder: "Your email",
  cta: "Subscribe",
};

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", href: "#", icon: "social-instagram" },
  { label: "Facebook", href: "#", icon: "social-facebook" },
  { label: "X", href: "#", icon: "social-x" },
  { label: "YouTube", href: "#", icon: "social-youtube" },
];
