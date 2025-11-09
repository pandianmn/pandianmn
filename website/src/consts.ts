export interface SocialLink {
  href: string;
  label: string;
}

export interface Site {
  title: string;
  description: string;
  href: string;
  author: string;
  locale: string;
  location: string;
}

export const SITE: Site = {
  title: 'Pandian Muninathan',
  description: 'Senior Data Engineer specializing in web scraping, automation, and data engineering solutions.',
  href: 'https://pandianmn.github.io',
  author: 'Pandian Muninathan',
  locale: 'en-US',
  location: 'India',
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/',
    label: 'home',
  },
  {
    href: '/experience/',
    label: 'experience',
  },
  {
    href: '/certifications/',
    label: 'certifications',
  },
  {
    href: '/projects/',
    label: 'projects',
  },
  {
    href: '/blog/',
    label: 'blog',
  },
]
