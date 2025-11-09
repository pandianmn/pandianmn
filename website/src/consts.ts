import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Pandian Muninathan',
  description:
    "I build automated data extraction systems that scale. From web scraping frameworks to LLM-powered processing pipelines, I create solutions that handle millions of records with precision.",
  href: 'https://pandianmn.github.io',
  author: 'Pandian Muninathan',
  locale: 'en-US',
  location: 'India',
  email: 'pandian.m@hotmail.com'
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/',
    label: 'home',
  },
  {
    href: '/experience',
    label: 'experience',
  },
  {
    href: '/certifications',
    label: 'certifications',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: '/projects',
    label: 'projects',
  },
  {
    href: '/blog',
    label: 'blog',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/pandianmn',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/pandianmuninathan/',
    label: 'LinkedIn',
  },
  {
    href: 'mailto:pandian.m@hotmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}

export interface Category {
  text: string
  logo: string
}

export type Technologies = {
  'Programming Languages': Category[]
  'Data Engineering & Web Scraping': Category[]
  'Cloud & Infrastructure': Category[]
  'Databases': Category[]
  'DevOps & Monitoring': Category[]
  'AI & Machine Learning': Category[]
  'Message Queues & Caching': Category[]
  'Operating Systems': Category[]
}

export const technologies: Technologies = {
  'Programming Languages': [
    { text: 'Python', logo: 'mdi:language-python' },
  ],
  'Data Engineering & Web Scraping': [
    { text: 'Scrapy', logo: 'simple-icons:scrapy' },
    { text: 'Playwright', logo: 'simple-icons:playwright' },
    { text: 'Selenium', logo: 'simple-icons:selenium' },
    { text: 'Flask', logo: 'simple-icons:flask' },
    { text: 'FastAPI', logo: 'simple-icons:fastapi' },
  ],
  'Cloud & Infrastructure': [
    { text: 'AWS', logo: 'mdi:aws' },
    { text: 'Docker', logo: 'mdi:docker' },
    { text: 'Kubernetes', logo: 'mdi:kubernetes' },
  ],
  'Databases': [
    { text: 'PostgreSQL', logo: 'simple-icons:postgresql' },
    { text: 'MongoDB', logo: 'simple-icons:mongodb' },
  ],
  'DevOps & Monitoring': [
    { text: 'Prometheus', logo: 'simple-icons:prometheus' },
    { text: 'Grafana', logo: 'simple-icons:grafana' },
    { text: 'Jenkins', logo: 'simple-icons:jenkins' },
    { text: 'Git', logo: 'mdi:git' },
  ],
  'AI & Machine Learning': [
    { text: 'OpenAI API', logo: 'simple-icons:openai' },
    { text: 'LLMs', logo: 'mdi:robot' },
    { text: 'Claude Code', logo: 'simple-icons:anthropic' },
  ],
  'Message Queues & Caching': [
    { text: 'Redis', logo: 'simple-icons:redis' },
    { text: 'Celery', logo: 'simple-icons:celery' },
  ],
  'Operating Systems': [
    { text: 'Linux', logo: 'mdi:linux' },
    { text: 'Ubuntu', logo: 'mdi:ubuntu' },
  ],
}
