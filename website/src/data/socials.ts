export const tag: string = "@pandianmn";
export const author: string = "Pandian Muninathan";
export const github: string = "https://github.com/pandianmn";

export const title: string = "Pandian Muninathan - Senior Data Engineer";
export const description: string =
  "I build automated data extraction systems that scale. From web scraping frameworks to LLM-powered processing pipelines, I create solutions that handle millions of records with precision.";
export const country: string = "India";

export const FooterSocials = [
  {
    name: "GitHub",
    url: github,
    icon: "mdi:github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/pandianmuninathan/?originalSubdomain=in",
    icon: "mdi:linkedin",
  },
  {
    name: "Email",
    url: "mailto:pandian.m@hotmail.com",
    icon: "mdi:email",
  },
];

interface Meta {
  title: string;
  description: string;
  keywords: string[];
  ogImage: {
    src: string;
    alt: string;
  };
}

export const defaultMeta: Meta = {
  title: "Pandian Muninathan - Home",
  description:
    "Discover the portfolio of Pandian Muninathan, a Senior Data Engineer with 8+ years of experience building scalable data solutions. Explore expertise in web scraping, automation, LLMs, and data engineering.",
  keywords: [
    "pandian muninathan",
    "senior data engineer",
    "data engineer",
    "web scraping",
    "python developer",
    "scrapy",
    "aws",
    "automation",
    "llm",
    "data extraction",
    "portfolio",
    "india",
  ],
  ogImage: {
    src: "/banner.png",
    alt: "Pandian Muninathan - Home",
  },
};

export interface Category {
  text: string;
  logo: string;
}

export type Technologies = {
  "Programming Languages": Category[];
  "Data Engineering & Web Scraping": Category[];
  "Cloud & Infrastructure": Category[];
  "Databases": Category[];
  "DevOps & Monitoring": Category[];
  "AI & Machine Learning": Category[];
  "Message Queues & Caching": Category[];
  "Operating Systems": Category[];
};

export const technologies: Technologies = {
  "Programming Languages": [
    { text: "Python", logo: "mdi:language-python" },
  ],
  "Data Engineering & Web Scraping": [
    { text: "Scrapy", logo: "simple-icons:scrapy" },
    { text: "Playwright", logo: "simple-icons:playwright" },
    { text: "Selenium", logo: "simple-icons:selenium" },
    { text: "Flask", logo: "simple-icons:flask" },
    { text: "FastAPI", logo: "simple-icons:fastapi" },
  ],
  "Cloud & Infrastructure": [
    { text: "AWS", logo: "mdi:aws" },
    { text: "Docker", logo: "mdi:docker" },
    { text: "Kubernetes", logo: "mdi:kubernetes" },
  ],
  "Databases": [
    { text: "PostgreSQL", logo: "simple-icons:postgresql" },
    { text: "MongoDB", logo: "simple-icons:mongodb" },
  ],
  "DevOps & Monitoring": [
    { text: "Prometheus", logo: "simple-icons:prometheus" },
    { text: "Grafana", logo: "simple-icons:grafana" },
    { text: "Jenkins", logo: "simple-icons:jenkins" },
    { text: "Git", logo: "mdi:git" },
  ],
  "AI & Machine Learning": [
    { text: "OpenAI API", logo: "simple-icons:openai" },
    { text: "LLMs", logo: "mdi:robot" },
    { text: "Claude Code", logo: "simple-icons:anthropic" },
  ],
  "Message Queues & Caching": [
    { text: "Redis", logo: "simple-icons:redis" },
    { text: "Celery", logo: "simple-icons:celery" },
  ],
  "Operating Systems": [
    { text: "Linux", logo: "mdi:linux" },
    { text: "Ubuntu", logo: "mdi:ubuntu" },
  ],
};
