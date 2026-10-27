export const RESUME_URL = `${import.meta.env.BASE_URL}Arunav_resume.pdf`;

export const profile = {
  name: 'Arunav Gawri',
  role: 'Software Analyst',
  location: 'Bangalore, India',
  email: 'arunavgawri@gmail.com',
  phone: '+91 98961 94034',
  phoneHref: '+919896194034',
  heroSummary:
    'Software Analyst at Goldman Sachs working across backend engineering, database access management, and infrastructure modernization — with a growing focus on LLM applications and agentic workflows.',
};

export const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/Drstone08',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/arunav-gawri-314897250',
    icon: 'linkedin',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/arunavgawri/',
    icon: 'instagram',
  },
];

export const education = {
  school: 'National Institute of Technology, Kurukshetra',
  degree: 'B.Tech, Information Technology',
  period: '2022 – 2026',
  grade: 'CGPA 8.02/10',
};

export const facts = [
  {
    label: 'Currently',
    value: 'Software Analyst at Goldman Sachs',
    meta: 'Bangalore, India',
    icon: 'briefcase',
  },
  {
    label: 'Education',
    value: 'NIT Kurukshetra',
    meta: `${education.degree} · ${education.period} · ${education.grade}`,
    icon: 'graduation',
  },
  {
    label: 'Focus',
    value: 'Backend, distributed systems & AI',
    meta: 'Java · Spring Boot · Kubernetes · AWS',
    icon: 'target',
  },
];

export const experience = [
  {
    company: 'Goldman Sachs',
    role: 'Software Analyst',
    period: 'Jul 2026 – Present',
    location: 'Bangalore, India',
    type: 'Full-time',
    highlights: [
      'Automated database access-management workflows across DB2, Sybase, and Oracle, streamlining elevated-access control, entitlement management, and authorization processes.',
      'Developed and integrated backend services using Java, Spring Boot, MongoDB, and internal APIs to manage database entitlements and authorization workflows.',
      'Deployed enterprise services on Kubernetes and migrated applications to AWS to support scalable, reliable, and maintainable infrastructure.',
      'Set up Prometheus-based monitoring for 24x7 availability and am building an automated agent to resolve issues before they reach frontline teams, targeting up to a 3x reduction in escalations.',
    ],
  },
  {
    company: 'Goldman Sachs',
    role: 'Seasonal Software Engineering Intern',
    period: 'Jan 2026 – May 2026',
    location: 'Bangalore, India',
    type: 'Internship',
    highlights: [
      'Migrated a legacy Perl-based database access-management service to a modern React and Java architecture, improving maintainability and enabling further automation.',
      'Integrated MongoDB and internal services to manage database entitlements and implement authorization workflows.',
      'Implemented database connection procedures and automated authorization-file generation for database access management.',
      'Used Podman and Testcontainers for containerized development and integration testing.',
    ],
  },
  {
    company: 'Goldman Sachs',
    role: 'Summer Software Engineering Intern',
    period: 'May 2025 – Jul 2025',
    location: 'Bangalore, India',
    type: 'Internship',
    highlights: [
      'Developed full-stack access-management functionality providing visibility and control over time-bound access to internal resources.',
      'Built React and Spring Boot components using Project Reactor and OpenAPI Generator to support access tracking and automated expiration workflows.',
    ],
  },
  {
    company: '603 Coworking Space',
    role: 'Frontend Developer Intern',
    period: 'Jun 2024 – Jul 2024',
    location: '',
    type: 'Internship',
    highlights: [
      'Built a responsive website using React, Vite, and Tailwind CSS for a workspace solutions provider serving 50+ client firms.',
      'Improved responsive layouts, navigation, and loading performance through mobile-first design, lazy loading, and code splitting.',
    ],
  },
];

export const projects = [
  {
    id: 'anime-watch',
    title: 'Anime Watch',
    category: 'Frontend',
    tagline: 'A responsive anime discovery app with search, watchlists, and dark mode.',
    bullets: [
      'Built the application with Next.js and Tailwind CSS, integrating the TMDB API for dynamic anime content.',
      'Added search, discovery, watchlist, routing, and dark-mode experiences.',
    ],
    tech: ['Next.js', 'Tailwind CSS', 'TMDB API'],
    context: 'Personal project',
    repo: null,
    live: null,
    gradient: 'from-violet-500/30 via-fuchsia-500/10 to-transparent',
  },
  {
    id: 'ipl-prediction',
    title: 'IPL Win Predictor',
    category: 'ML',
    tagline: 'A logistic-regression model for predicting IPL match outcomes.',
    bullets: [
      'Achieved approximately 74% accuracy on the evaluated dataset after feature preprocessing and engineering.',
      'Preprocessed match features and engineered prediction inputs for model training and evaluation.',
      'Applied Bayesian hyperparameter optimization and exposed predictions through a Flask interface.',
    ],
    tech: ['Python', 'Machine Learning', 'Flask'],
    context: 'Machine learning project',
    repo: null,
    live: null,
    gradient: 'from-emerald-500/25 via-teal-500/10 to-transparent',
  },
  {
    id: 'webhunt',
    title: 'WebHunt',
    category: 'Full-stack',
    tagline: 'An online treasure-hunt platform built for Techspardha at NIT Kurukshetra.',
    bullets: [
      'Supported more than 300 participants with Firebase-backed answer tracking, progress, and submissions.',
      'Added automated scoring and live leaderboard updates for the duration of the competition.',
    ],
    tech: ['React', 'Firebase', 'Vercel'],
    context: 'Techspardha · NIT Kurukshetra',
    repo: 'https://github.com/Drstone08/frontweb',
    live: 'https://webhunt-eight.vercel.app',
    gradient: 'from-amber-500/25 via-orange-500/10 to-transparent',
  },
];

export const skillGroups = [
  {
    id: 'languages',
    title: 'Languages',
    icon: 'code',
    items: ['Java', 'C++', 'Python', 'JavaScript', 'C'],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'server',
    items: ['Spring Boot', 'Node.js', 'Express.js', 'REST APIs', 'OpenAPI Generator'],
  },
  {
    id: 'ai',
    title: 'AI & GenAI',
    icon: 'robot',
    items: ['RAG', 'LLM tool calling', 'Agentic workflows', 'LangGraph', 'Google ADK', 'ChromaDB', 'MCP', 'Groq', 'LiteLLM'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'react',
    items: ['React.js', 'Next.js', 'Tailwind CSS'],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'database',
    items: ['DB2', 'Sybase', 'Oracle', 'MongoDB', 'MySQL'],
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    icon: 'cloud',
    items: ['Kubernetes', 'AWS', 'Podman', 'Docker', 'Git', 'GitHub'],
  },
  {
    id: 'testing',
    title: 'Testing & Observability',
    icon: 'test',
    items: ['Testcontainers', 'OpenTelemetry', 'Prometheus', 'Integration testing'],
  },
  {
    id: 'core-cs',
    title: 'Core CS',
    icon: 'network',
    items: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Networks'],
  },
];

export const achievements = [
  {
    value: '600+',
    label: 'DSA problems solved across LeetCode, GeeksforGeeks, HackerRank, CodeChef, and Codeforces',
  },
  {
    value: 'Rank 68',
    label: 'CodeChef Starters 127',
  },
  {
    value: '3★',
    label: 'CodeChef rating',
  },
];
