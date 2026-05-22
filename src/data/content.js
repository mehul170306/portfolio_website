import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaFigma, FaDatabase, FaLayerGroup, FaRobot, FaBrain, FaCode, FaRocket, FaLinkedin, FaInstagram, FaEnvelope
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiFirebase, SiVercel, SiLangchain, SiGooglecolab, SiTypescript } from 'react-icons/si';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#journey' },
  { name: 'Contact', href: '#contact' },
];

export const HERO_CONTENT = {
  name: "Mehul Gaikwad",
  title: "AI Developer • Full Stack Builder • Smart Systems Creator",
  description: "I build modern AI-powered applications, smart ecosystems, intelligent automation systems, and futuristic digital experiences using React, AI technologies, and scalable architectures.",
};

export const ABOUT_CONTENT = {
  text: "Passionate developer focused on AI systems, SaaS products, intelligent automation, futuristic UI/UX, and scalable software ecosystems.",
  cards: [
    { title: "AI Development", icon: FaBrain },
    { title: "Full Stack Development", icon: FaCode },
    { title: "Smart Systems", icon: FaRobot },
    { title: "SaaS Platforms", icon: FaLayerGroup },
    { title: "UI/UX Design", icon: FaFigma },
  ]
};

export const SKILLS = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: FaReact },
      { name: "JavaScript", icon: FaJs },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: FaCode },
      { name: "APIs", icon: FaRocket },
      { name: "Authentication", icon: FaDatabase },
    ]
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Firebase", icon: SiFirebase },
      { name: "SQL", icon: FaDatabase },
    ]
  },
  {
    category: "AI / Modern Stack",
    items: [
      { name: "Gemini API", icon: FaBrain },
      { name: "LangChain", icon: SiLangchain },
      { name: "LlamaIndex", icon: FaBrain },
      { name: "Vector DBs", icon: FaDatabase },
      { name: "Embedding Models", icon: FaBrain },
      { name: "Retrieval Systems", icon: FaBrain },
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: FaCode },
      { name: "Figma", icon: FaFigma },
      { name: "Vercel", icon: SiVercel },
      { name: "Google Colab", icon: SiGooglecolab },
    ]
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "NEXUS Workspace / DMS System",
    description: "AI-powered document management system with smart file routing, persistent registry, and internal viewers.",
    tech: ["React", "AI", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "Smart Control Ecosystem",
    description: "AI + IoT ecosystem vision featuring smart breadboard concepts and intelligent monitoring systems.",
    tech: ["IoT", "AI", "Automation", "React"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "Inventory + Recipe AI App",
    description: "Smart kitchen assistant for inventory tracking and AI-driven recipe suggestions based on available ingredients.",
    tech: ["React", "Gemini API", "Firebase"],
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800",
    github: "#",
    demo: "#"
  },
  {
    id: 4,
    title: "AI Portfolio Website",
    description: "A futuristic React-based portfolio with smooth animations and a premium modern UI design system.",
    tech: ["React", "Framer Motion", "Tailwind"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    github: "#",
    demo: "#"
  },
  {
    id: 5,
    title: "Electronic SaaS + AI Concept",
    description: "SaaS platform concept for electronic components with AI-powered automation pipelines and smart dashboards.",
    tech: ["SaaS", "AI", "React", "Cloud"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    github: "#",
    demo: "#"
  }
];

export const JOURNEY = [
  { year: "2024", event: "Started frontend development" },
  { year: "2025", event: "Built AI-powered systems and SaaS concepts" },
  { year: "2026", event: "Exploring scalable intelligent ecosystems and advanced AI architectures" },
];

export const ACHIEVEMENTS = [
  { title: "AI Journey", value: "Continuous Learning" },
  { title: "Full Stack", value: "10+ Projects" },
  { title: "Architecture", value: "Smart Systems" },
  { title: "UI/UX", value: "Premium Design" },
];

export const SOCIALS = [
  { name: "GitHub", icon: FaGithub, href: "https://github.com/mehul170306" },
  { name: "LinkedIn", icon: FaLinkedin, href: "#" },
  { name: "Instagram", icon: FaInstagram, href: "#" },
  { name: "Email", icon: FaEnvelope, href: "mailto:contact@example.com" },
];
