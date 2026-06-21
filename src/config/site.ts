export const site = {
  title: "Mian Qin",
  author: "Mian Qin",
  lang: "en",
  url: "https://qinmian5.github.io",
  favicon: "/favicon.svg",
  description:
    "Researcher and developer working on molecular simulation, scientific computing, and agentic research infrastructure.",
  template: {
    name: "Academic Portfolio Astro",
    url: "https://github.com/rubzip/academic-portfolio-astro",
    commit: "6f296c22bd2dc1712d39545835dc9cd4e4f4854b",
    license: "MIT",
  },
} as const;

export const profile = {
  name: "Mian Qin",
  initials: "MQ",
  avatar: "/profile-picture.png",
  affiliation: "University of Pennsylvania",
  sidebarLine: "PhD student in Chemical and Biomolecular Engineering",
  headline:
    "PhD student in Chemical and Biomolecular Engineering at the University of Pennsylvania.",
  summary: site.description,
} as const;

export const socials = [
  {
    name: "GitHub",
    icon: "Github",
    href: "https://github.com/QinMian5",
    label: "Mian Qin on GitHub",
    enabled: true,
  },
  {
    name: "Google Scholar",
    icon: "GoogleScholar",
    href: "https://scholar.google.com/citations?hl=en&user=O9xZZssAAAAJ",
    label: "Mian Qin on Google Scholar",
    enabled: true,
  },
  {
    name: "Email",
    icon: "Mail",
    href: "mailto:qinmian2023@gmail.com",
    label: "Email Mian Qin",
    enabled: true,
  },
  {
    name: "LinkedIn",
    icon: "LinkedIn",
    href: "https://www.linkedin.com/in/mian-qin-9419b93b2/",
    label: "Mian Qin on LinkedIn",
    enabled: true,
  },
] as const;

export const education = [
  {
    period: "2023–Present",
    institution: "University of Pennsylvania",
    field: "Chemical and Biomolecular Engineering",
    status: "PhD student",
    group: {
      name: "Patel Group",
      href: "https://patelgroup.seas.upenn.edu",
    },
  },
  {
    period: "2019–2023",
    institution: "Peking University",
    abbreviation: "PKU",
    degree: "B.S. in Physics",
    group: {
      name: "Xu Group",
      href: "https://xulm.pku.edu.cn/index.htm",
    },
  },
] as const;

export const navigation = [
  { href: "/", label: "About", enabled: true },
  { href: "/publications/", label: "Publications", enabled: true },
  { href: "/talks/", label: "Talks", enabled: false },
  { href: "/teaching/", label: "Teaching", enabled: false },
  { href: "/projects/", label: "Code", enabled: true },
  { href: "/writing/", label: "Writing", enabled: true },
  { href: "/tags/", label: "Tags", enabled: false },
  { href: "/cv/", label: "CV", enabled: false },
] as const;

export const enabledNavigation = navigation.filter((item) => item.enabled);

export const pages = {
  about: {
    title: "About",
    subtitle: "Confirmed public profile and education.",
  },
  projects: {
    title: "Code & Projects",
    subtitle: "Confirmed public software and project entries.",
    emptyTitle: "No public projects yet",
    emptyMessage:
      "Project entries will appear here after confirmed public content is approved.",
  },
  writing: {
    title: "Writing",
    subtitle: "Confirmed public articles and notes.",
    emptyTitle: "No public writing yet",
    emptyMessage:
      "Writing entries will appear here after confirmed public content is approved.",
  },
  publications: {
    title: "Publications",
    subtitle: "Confirmed public publications.",
    emptyTitle: "No public publications yet",
    emptyMessage:
      "Publication entries will appear here after confirmed public content is approved.",
  },
  talks: {
    title: "Talks & Presentations",
    subtitle: "Confirmed public talks, slides, and presentations.",
    emptyTitle: "No public talks yet",
    emptyMessage:
      "Talk entries will appear here after confirmed public content is approved.",
  },
  teaching: {
    title: "Teaching",
    subtitle: "Confirmed public teaching material.",
    emptyTitle: "No public teaching entries yet",
    emptyMessage:
      "Teaching entries will appear here after confirmed public content is approved.",
  },
  tags: {
    title: "Tags",
    subtitle: "Topics from approved public content.",
    emptyTitle: "No tags yet",
    emptyMessage:
      "Tags will appear here after approved public content includes topic metadata.",
  },
  cv: {
    title: "Curriculum Vitae",
    subtitle: "Confirmed public CV content.",
    emptyTitle: "No public CV yet",
    emptyMessage:
      "A CV page will appear here after an approved public CV is available.",
  },
} as const;
