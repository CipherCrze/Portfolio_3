export interface ExperienceEntry {
  period: string;
  location: string;
  role: string;
  org: string;
  bullets: string[];
  badge?: string;
}

export interface Project {
  label: string;
  sublabel: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  award?: string;
  githubUrl: string;
  demoUrl?: string;
  mockupType: "dashboard" | "chat" | "audio" | "summary";
}

export interface Publication {
  label: string;
  title: string;
  description: string;
  tags: string[];
  url: string;
}

export interface Award {
  title: string;
  org: string;
  iconType: "trophy" | "medal" | "rocket";
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface TechBadge {
  label: string;
  title: string;
  proficiency: "Advanced" | "Intermediate" | "Beginner";
  percentage: number;
  useCases: string;
  description: string;
}

// ─── Experience ───────────────────────────────────────────
export const experiences: ExperienceEntry[] = [
  {
    period: "JAN 2025 — JUL 2025",
    location: "Remote",
    role: "Capstone Intern",
    org: "Deloitte Capstone Program",
    bullets: [
      "Built Synergy AI — an AI-driven workspace optimizer for hybrid workplace management.",
      "Developed intelligent modules for space planning, asset management, and energy prediction.",
      "Created a comprehensive employer portal for hybrid workplace coordination.",
      "Won the Deloitte Capstone competition among all participating teams.",
    ],
    badge: "Pre-Placement Offer (PPO)",
  },
  {
    period: "2023 — 2024",
    location: "Jaipur, Rajasthan",
    role: "Head of Projects",
    org: "ANOVA MUJ — AI Club, Manipal University Jaipur",
    bullets: [
      "Led and managed multiple AI & tech-focused projects across NLP, IoT, and ML domains.",
      "Supervised cross-functional teams in developing AI, NLP, and IoT solutions.",
      "Coordinated teams to deliver innovative solutions using cutting-edge ML methodologies.",
    ],
  },
  {
    period: "2023 — 2024",
    location: "Pune, India",
    role: "Diploma in Python Full Stack",
    org: "FirstBit Solutions",
    bullets: [
      "Completed intensive Python full-stack development curriculum covering web frameworks, databases, and deployment.",
    ],
  },
];

// ─── Unified Projects Array (Exactly 4 public repos) ────────
export const projects: Project[] = [
  {
    label: "Featured Project",
    sublabel: "Deloitte Capstone Winner",
    title: "Synergy AI — Workspace Optimizer",
    subtitle: "AI · Space Optimization · Workplace Management",
    description:
      "Intelligent workspace optimizer with space planning and asset management modules. Built for Deloitte's Capstone program — won the competition and earned a PPO.",
    tags: ["Python", "TensorFlow", "Flask"],
    award: "★ Deloitte Capstone Winner · PPO",
    githubUrl: "https://github.com/CipherCrze/Synergy-AI-Employer",
    mockupType: "dashboard",
  },
  {
    label: "Featured Project",
    sublabel: "Competition · 2nd Place",
    title: "SympEase — AI Health Consultant",
    subtitle: "NLP · Healthcare AI · RAG",
    description:
      "AI health consultant powered by BioMistral with symptom-analysis features, built on a RAG-based architecture. Ranked 2nd in the Lyzr AI Competition.",
    tags: ["Python", "BioMistral", "NLP", "RAG"],
    award: "★ 2nd Rank — Lyzr AI Competition",
    githubUrl: "https://github.com/CipherCrze/SympEase",
    mockupType: "chat",
  },
  {
    label: "Project",
    sublabel: "Recommendation Systems",
    title: "MELR — Music Recommendation Engine",
    subtitle: "Collaborative Filtering · Backend System",
    description:
      "A personalized music recommendation system backend leveraging collaborative filtering for highly accurate user taste and pattern modeling.",
    tags: ["Python", "Scikit-learn", "MongoDB"],
    githubUrl: "https://github.com/CipherCrze/MELR",
    mockupType: "audio",
  },
  {
    label: "Project",
    sublabel: "NLP Summarizer",
    title: "BOOLEAN — Text Summarizer",
    subtitle: "Text Processing · Transformer Pipelines",
    description:
      "Extractive and abstractive text-summarization system with optimized NLP algorithms, spanning classic and transformer-based approaches.",
    tags: ["Python", "NLTK", "Transformers"],
    githubUrl: "https://github.com/CipherCrze/Boolean-Text-Summarizer",
    mockupType: "summary",
  },
];

// ─── Publication ──────────────────────────────────────────
export const publication: Publication = {
  label: "IEEE XPLORE · DOI 10.1109/WCCEST66994.2025.11389940",
  title: "CUDA-based Optimization for Matrix Operations",
  description:
    "Research on CUDA-based optimization techniques for matrix-multiplication efficiency, proposing a systematic pipeline for performance improvements in GPU-accelerated computing.",
  tags: ["HPC", "GPU Computing", "CUDA", "Matrix Operations"],
  url: "https://ieeexplore.ieee.org/document/11389940",
};

// ─── Awards ───────────────────────────────────────────────
export const awards: Award[] = [
  {
    title: "Pre-Placement Offer (PPO) from Deloitte",
    org: "Won Deloitte Capstone Competition · July 2025",
    iconType: "trophy",
  },
  {
    title: "2nd Rank — Lyzr AI Competition",
    org: "RAG-based Health Consultant · 2024",
    iconType: "medal",
  },
  {
    title: "Smart India Hackathon Selection",
    org: "IoT Driver Detection · Smart Vehicle · 2024",
    iconType: "rocket",
  },
];

// ─── Skills ───────────────────────────────────────────────
export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "SQL", "JavaScript", "C", "HTML"],
  },
  {
    title: "Frameworks",
    skills: ["TensorFlow", "Keras", "Scikit-learn", "Flask", "Django", "NLTK", "SpaCy"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Docker", "MySQL", "MongoDB", "AWS", "GCP", "Linux"],
  },
  {
    title: "Leadership",
    skills: ["Leadership", "Project Mgmt", "Public Speaking", "Team Supervision"],
  },
];

// ─── Tech Badges ──────────────────────────────────────────
export const techBadges: TechBadge[] = [
  {
    label: "Py",
    title: "Python",
    proficiency: "Advanced",
    percentage: 95,
    useCases: "AI, Machine Learning, Backend Development, Data Engineering, Automation, and Research",
    description: "Core language for ML pipelines, NLP models, RAG architectures, and CUDA performance optimization.",
  },
  {
    label: "JS",
    title: "JavaScript",
    proficiency: "Advanced",
    percentage: 85,
    useCases: "Full-Stack Web Development, Interactive User Interfaces, and Client Applications",
    description: "Used to develop responsive, client-side browser interfaces, widgets, and dynamic layouts.",
  },
  {
    label: "SQL",
    title: "SQL",
    proficiency: "Advanced",
    percentage: 90,
    useCases: "Relational Database Design, Data Aggregation, Analytics, and Query Optimization",
    description: "Architecting schemas, managing relational entities, and composing high-speed analytical queries.",
  },
  {
    label: "C",
    title: "C",
    proficiency: "Intermediate",
    percentage: 75,
    useCases: "Systems Programming, GPU Optimization, Hardware-Level Operations, and CUDA Integration",
    description: "Writing custom low-level matrix operation structures and performance-critical operations.",
  },
  {
    label: "TF",
    title: "TensorFlow",
    proficiency: "Advanced",
    percentage: 92,
    useCases: "Deep Learning Neural Networks, Model Training, Image Detection, and Inference Platforms",
    description: "Developing custom neural model training loops, image detection assets, and hybrid optimizers.",
  },
  {
    label: "Git",
    title: "Git",
    proficiency: "Advanced",
    percentage: 90,
    useCases: "Distributed Version Control, Collaboration, CI/CD Integration, and Release Workflows",
    description: "Managing project source code version history, branches, and team deployment repositories.",
  },
  {
    label: "AWS",
    title: "AWS",
    proficiency: "Intermediate",
    percentage: 80,
    useCases: "Cloud Computing Architectures, Model Hosting APIs, Scaling, and Serverless Infrastructure",
    description: "Deploying Python backend endpoints, vector storage services, and scaling cloud host instances.",
  },
  {
    label: "GCP",
    title: "Google Cloud",
    proficiency: "Intermediate",
    percentage: 80,
    useCases: "Data Warehousing, Pipeline Processing, Large Scale Storage, and AI Engine Integration",
    description: "Utilizing GCP BigQuery data aggregation queries and managing cloud data bucket layers.",
  },
];

// ─── Hero Facts ───────────────────────────────────────────
export const heroFacts = [
  "Graduate Manipal University Jaipur",
  "incoming Data Analyst @ Deloitte USI",
  "IEEE Published",
  "4 Projects Shipped",
];
