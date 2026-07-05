export const SITE_CONFIG = {
  name: "Arnav Sharma",
  title: "Arnav Sharma — Data Science & AI/ML Engineer",
  description:
    "Portfolio of Arnav Sharma — incoming Data Analyst @ Deloitte USI and Graduate of Manipal University Jaipur. Published GPU-computing researcher on IEEE Xplore.",
  url: "https://arnavsharma.dev",
  ogDescription:
    "RAG systems, NLP, GPU computing. Deloitte PPO. Published IEEE researcher.",
  locale: "en_US",
  location: "Bengaluru, India",
} as const;

export const SOCIAL_LINKS = {
  github: "https://github.com/CipherCrze",
  email: "arnavakhilesh.sharma@gmail.com",
  phone: "+91-860-036-6328",
  ieee: "https://ieeexplore.ieee.org/document/11389940",
} as const;

export const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#publications" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
] as const;

export const SECTION_IDS = {
  hero: "hero",
  about: "about",
  experience: "experience",
  projects: "projects",
  publications: "publications",
  awards: "awards",
  contact: "contact",
} as const;

export const COLORS = {
  ink: "#0b0b0f",
  ink2: "#131318",
  ink3: "#1b1b22",
  paper: "#ede9e1",
  paperDim: "#918f97",
  paperFaint: "#57565d",
  brass: "#c9a464",
  brassBright: "#ddbd85",
  brassSoft: "rgba(201,164,100,0.5)",
  ferrariRed: "#E10600",
  line: "rgba(237,233,225,0.09)",
  lineStrong: "rgba(237,233,225,0.18)",
} as const;
