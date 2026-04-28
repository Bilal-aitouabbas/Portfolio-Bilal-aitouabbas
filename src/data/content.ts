// ── Single source of truth ──
// Edit this file to update any section of the portfolio.

export const personal = {
  name: 'Bilal AIT OUABBAS',
  title: 'Développeur Full Stack',
  school: 'Epitech Lyon',
  contract: 'Alternance',
  email: 'bilal.ait-ouabbas@epitech.eu',
  phone: '+33 06 59 25 00 67',
  github: 'https://github.com/Bilal-aitouabbas',
  linkedin: 'https://www.linkedin.com/in/bilal-ait-ouabbas',
  cv: '/CV_Bilal_AIT-OUABBAS.pdf',
  photo: '/BILAL AIT OUABBAS.jpg',
  tagline: '',
  about: [
    "Développeur Full Stack en alternance chez Epitech Lyon, passionné par la création d'interfaces modernes et de back-ends robustes. J'aime résoudre des problèmes complexes en écrivant du code propre et maintenable.",
    "Curieux et rigoureux, je m'intéresse à l'architecture logicielle, aux bonnes pratiques DevOps et à l'expérience utilisateur. Toujours prêt à apprendre de nouvelles technologies et à relever de nouveaux défis.",
  ],
}

export interface Skill {
  category: string
  icon: string
  color: 'blue' | 'purple' | 'cyan'
  tags: string[]
}

export const skills: Skill[] = [
  {
    category: 'Front-end',
    icon: '🎨',
    color: 'blue',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'HTML5', 'CSS3', 'Vite'],
  },
  {
    category: 'Back-end',
    icon: '⚙️',
    color: 'purple',
    tags: ['Java', 'Spring Boot', 'Node.js', 'REST API', 'PostgreSQL', 'MySQL', 'Docker'],
  },
  {
    category: 'Outils & DevOps',
    icon: '🛠',
    color: 'cyan',
    tags: ['Git', 'GitHub', 'Vercel', 'IntelliJ', 'VS Code', 'Postman', 'Linux'],
  },
]

export interface Experience {
  year: string
  title: string
  company: string
  description: string
  tags: string[]
}

export const experiences: Experience[] = [
  {
    year: '2024 — Présent',
    title: 'Développeur Full Stack',
    company: 'Epitech Lyon — Alternance',
    description:
      "Développement d'applications web full stack dans le cadre de projets pédagogiques et professionnels. Mise en place de features React/Spring Boot, revue de code, participation aux rituels agile.",
    tags: ['React', 'Spring Boot', 'TypeScript', 'PostgreSQL'],
  },
  {
    year: '2023 — 2024',
    title: 'Étudiant développeur',
    company: 'Epitech Lyon',
    description:
      "Formation intensive axée sur la pratique : projets en équipe, langages bas niveau (C, C++), développement web, algorithmique. Développement de la rigueur et de l'autonomie.",
    tags: ['C', 'C++', 'Shell', 'Algorithmique'],
  },
  {
    year: '2023',
    title: 'Baccalauréat STI2D',
    company: 'Option SIN',
    description:
      "Spécialité Systèmes d'Information et Numérique. Bases en électronique, programmation embarquée et gestion de projets techniques.",
    tags: ['Python', 'Arduino', 'HTML/CSS'],
  },
]

export interface Project {
  title: string
  description: string
  longDesc: string
  stack: string[]
  github: string
  demo: string | null
  gradient: string
}

export const projects: Project[] = [
  {
    title: 'ConnectIn',
    description: 'Réseau social professionnel type LinkedIn',
    longDesc:
      "Application full stack permettant aux utilisateurs de créer un profil, publier des posts, suivre d'autres membres et échanger des messages. Back-end Spring Boot avec JWT, front-end React + TypeScript.",
    stack: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/Bilal-aitouabbas/ConnectIn',
    demo: null,
    gradient: 'from-blue to-purple',
  },
  {
    title: 'Portfolio',
    description: 'Ce portfolio — React + TypeScript + Tailwind',
    longDesc:
      "Portfolio personnel entièrement conçu en React + TypeScript avec Vite. Design dark, animations CSS, canvas particules interactif, curseur custom, 100% responsive.",
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/Bilal-aitouabbas/Portfolio-Bilal-aitouabbas',
    demo: 'https://portfolio-bilal-aitouabbas.vercel.app',
    gradient: 'from-purple to-cyan',
  },
]

export const formspreeId = 'xpwzgkby'
