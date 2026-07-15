export type Hobby = {
  name: string
  icon: string
  description?: string
}
export const hobbies: Hobby[] = [
  {
    description:
      'Big fan of audiobooks — especially when diving into sci-fi or fantasy worlds during a walk or commute.',
    icon: '🎧',
    name: 'Audiobooks',
  },
  {
    description:
      'From intergalactic adventures to gritty dystopias, I’m always up for a good sci-fi or fantasy binge.',
    icon: '📺',
    name: 'Movies & TV Shows',
  },
  {
    description:
      'Nothing beats unwinding in the kitchen — whether it’s cooking for family or freestyling a new recipe.',
    icon: '🍳',
    name: 'Cooking',
  },
  {
    description:
      'Tinkering with self-hosted tools and building a homelab scratches both my tech itch and curiosity.',
    icon: '🖥️',
    name: 'Homelab & Self-Hosting',
  },
  {
    description:
      'Fixing gadgets, reviving appliances, or bringing my son’s “battle-tested” toys back to life — it’s part challenge, part joy.',
    icon: '🛠️',
    name: 'Repair & Maintenance',
  },
  {
    description:
      'Whatever the genre, if it hits — it plays. Cranked-up music fuels my focus and coding flow.',
    icon: '🎵',
    name: 'Music Listening',
  },
  {
    description:
      'Picked up 5S principles at a previous job with strong Japanese roots. Since then, keeping spaces clean and organized has become second nature — it sharpens my focus and boosts efficiency.',
    icon: '✨',
    name: '5S Adept',
  },
  {
    description:
      'Gaming is my escape and inspiration — from narrative-rich RPGs to bone-crushing soulslike games.',
    icon: '🎮',
    name: 'Video Games',
  },
]
export type Project = {
  name: string
  description?: string
  start: Date
  end?: Date
  domain?: Domain
  technologies?: Skill[]
}
export type SocialLink = { label: string; url: string; icon: string }
export const SocialLinks: SocialLink[] = [
  { icon: '▥', label: 'Coding stats', url: 'https://wakatime.com/@Dufran' },
  {
    icon: '♫',
    label: 'Current playlist',
    url: 'https://music.youtube.com/playlist?list=PLghlXbMeN9Km6qWlHa6M3G4Bwr00Pr9V4&si=8X8RYo8JymbxLGcQ',
  },
  { icon: 'in', label: 'LinkedIn', url: 'https://www.linkedin.com/in/oleksandr-korol/' },
  { icon: '⌘', label: 'Github', url: 'https://github.com/Dufran' },
  { icon: '★', label: 'Favorite libraries', url: 'https://github.com/Dufran?tab=stars' },
  { icon: '✉', label: 'Contact', url: 'mailto:oleksandr.korol.dev@gmail.com' },
]

export type WorkExperience = {
  company: 'COAX Software' | 'PLANEKS' | 'SEBN'
  description: string
  end?: Date
  responsibilities: string[]
  role: string
  start: Date
}

export const cvProfile = {
  automationSummary:
    'Driven by time efficiency: if part of a workflow can be automated, I automate it using the best available tools, leaving more time to solve meaningful business problems with clean, effective code.',
  email: 'oleksandr.korol.dev@gmail.com',
  github: 'https://github.com/Dufran',
  highlights: [
    'Backend development with a strong focus on performance optimization, automated testing, and security.',
    'Responsive React interfaces designed around intuitive end-user workflows.',
    'Unix-based systems, deployment workflows, server management, and self-hosted infrastructure.',
    'Cross-functional collaboration and product-focused technical decision making.',
    'Workflow automation that reduces manual overhead and improves delivery efficiency.',
  ],
  languages: ['English B2', 'German A2', 'Ukrainian C2'],
  linkedIn: 'https://www.linkedin.com/in/oleksandr-korol/',
  name: 'Oleksandr Korol',
  professionalSummary:
    'Software engineer delivering product-focused systems end to end: Python APIs, React interfaces, third-party integrations, workflow automation, and production infrastructure across Linux, Docker, and virtual machines. Adaptable and accountable, with a track record of taking robust solutions from initial design through deployment and operation.',
  shortTitle: 'Fullstack & Infrastructure Engineer',
  tagline:
    'Building product-focused software from application code and integrations to Linux, Docker, virtual machines, and deployment automation.',
  title: 'Software Engineer — Fullstack, Infrastructure & Automation',
  website: 'https://dufran.org',
} as const

export const workExperiences: WorkExperience[] = [
  {
    company: 'PLANEKS',
    description:
      'Lead the development of scalable web applications across backend services, responsive frontend interfaces, integrations, and production infrastructure.',
    responsibilities: [
      'Design and implement server-side application logic with Python, Django, Django REST Framework, and FastAPI.',
      'Build responsive React and TypeScript interfaces and integrate them with backend APIs.',
      'Deploy and troubleshoot Dockerized services on Linux virtual machines, including reverse proxies, background processing, and production integrations.',
    ],
    role: 'Fullstack Developer',
    start: new Date('2023-11-01'),
  },
  {
    company: 'COAX Software',
    description:
      'Developed backend systems and APIs for commercial products while collaborating with cross-functional teams to deliver secure, maintainable software.',
    end: new Date('2023-11-01'),
    responsibilities: [
      'Implemented backend services and REST APIs using Python, Django REST Framework, and FastAPI.',
      'Improved application quality through automated testing, code review, performance work, and security practices.',
      'Integrated databases, queues, cloud services, and external APIs across multiple product domains.',
    ],
    role: 'Middle Python Developer',
    start: new Date('2022-06-01'),
  },
  {
    company: 'SEBN',
    description:
      'Built internal software solutions for automotive manufacturing, logistics, planning, and network operations in close collaboration with business users.',
    end: new Date('2022-06-01'),
    responsibilities: [
      'Investigated production bottlenecks and translated operational requirements into maintainable software solutions.',
      'Delivered projects from initial concept through implementation, rollout, and user support.',
      'Automated business workflows and integrated systems used across multiple company departments.',
    ],
    role: 'Software Engineer',
    start: new Date('2020-02-01'),
  },
]

type SkillIcon =
  | 'adminer'
  | 'algolia'
  | 'sysaid'
  | 'freshdesk'
  | 'amazonec2'
  | 'amazonelasticache'
  | 'amazonrds'
  | 'amazons3'
  | 'biome'
  | 'amazonsqs'
  | 'antdesign'
  | 'awslambda'
  | 'bootstrap'
  | 'caddy'
  | 'celery'
  | 'cloudflare'
  | 'css3'
  | 'dbeaver'
  | 'debian'
  | 'digitalocean'
  | 'django'
  | 'docker'
  | 'elasticsearch'
  | 'electron'
  | 'eslint'
  | 'excalidraw'
  | 'facebook'
  | 'fastapi'
  | 'figma'
  | 'git'
  | 'github'
  | 'githubactions'
  | 'githubcopilot'
  | 'googlecalendar'
  | 'googletranslate'
  | 'hetzner'
  | 'hoppscotch'
  | 'html5'
  | 'htmx'
  | 'instagram'
  | 'javascript'
  | 'jira'
  | 'laravel'
  | 'leaflet'
  | 'letsencrypt'
  | 'linux'
  | 'macos'
  | 'mailgun'
  | 'mantine'
  | 'mariadb'
  | 'mermaid'
  | 'metabase'
  | 'minio'
  | 'mongodb'
  | 'mui'
  | 'mysql'
  | 'netdata'
  | 'nextdotjs'
  | 'nginx'
  | 'numpy'
  | 'nvm'
  | 'obsidian'
  | 'openai'
  | 'opentelemetry'
  | 'pandas'
  | 'paypal'
  | 'php'
  | 'pinterest'
  | 'poetry'
  | 'postgresql'
  | 'precommit'
  | 'prettier'
  | 'pydantic'
  | 'pytest'
  | 'python'
  | 'react'
  | 'reactrouter'
  | 'redis'
  | 'redux'
  | 'ruff'
  | 'selenium'
  | 'sentry'
  | 'shopify'
  | 'sonarqube'
  | 'sqlite'
  | 'stripe'
  | 'stylelint'
  | 'slack'
  | 'swagger'
  | 'tailscale'
  | 'trello'
  | 'twilio'
  | 'typescript'
  | 'ubuntu'
  | 'uml'
  | 'uv'
  | 'vite'
  | 'warp'
  | 'xml'
  | 'yarn'

export type SkillLabel =
  | 'Active Directory'
  | 'Adminer'
  | 'Algolia'
  | 'Android'
  | 'Android Studio'
  | 'App Store Connect'
  | 'Astro'
  | 'SysAid'
  | 'Freshdesk'
  | 'Ant Design'
  | 'AWS EC2'
  | 'AWS ElastiCache'
  | 'AWS Lambda'
  | 'AWS RDS'
  | 'AWS S3'
  | 'AWS SNS'
  | 'AWS SQS'
  | 'AsyncAPI'
  | 'Bootstrap'
  | 'Biome'
  | 'Caddy'
  | 'Celery'
  | 'Cloudflare Zero Trust'
  | 'CSS'
  | 'DBeaver'
  | 'Debian'
  | 'DHCP'
  | 'Digital Ocean'
  | 'Django'
  | 'Django Channels'
  | 'djlint'
  | 'Docker'
  | 'DocuSign API'
  | 'DRF Spectacular'
  | 'DRF'
  | 'Elasticsearch'
  | 'Electron JS'
  | 'ESLint'
  | 'Excalidraw'
  | 'Facebook API'
  | 'FastAPI'
  | 'Figma'
  | 'Firebase Cloud Messaging'
  | 'Git'
  | 'Github Actions'
  | 'Github API'
  | 'GitHub Copilot'
  | 'GitHub'
  | 'Google Calendar API'
  | 'Google Maps API'
  | 'Google Merchant API'
  | 'Google Play Console'
  | 'Google Translate API'
  | 'Gradle'
  | 'Hetzner Cloud'
  | 'Hoppscotch'
  | 'HTML'
  | 'HTMX'
  | 'Hyperscript'
  | 'i18next'
  | 'Instagram API'
  | 'Jira API'
  | 'Jira'
  | 'JS'
  | 'Laravel'
  | 'Leaflet'
  | 'Linux'
  | 'Load Testing'
  | 'Locust'
  | 'MacOS'
  | 'Mailgun'
  | 'Mailjet'
  | 'Mantine UI'
  | 'MariaDB'
  | 'Material UI'
  | 'Mermaid JS'
  | 'Metabase'
  | 'MinIO'
  | 'MJML'
  | 'Mobile App Publishing'
  | 'MongoDB'
  | 'MySQL'
  | 'Netdata'
  | 'NextJS'
  | 'Nginx'
  | 'NPM'
  | 'NumPy'
  | 'NVM'
  | 'OAuth2'
  | 'Obsidian'
  | 'Office 365 API'
  | 'Open Telemetry'
  | 'OpenAI api'
  | 'Pandas'
  | 'PayPal'
  | 'PhP'
  | 'Pinterest API'
  | 'Playwright'
  | 'Poetry'
  | 'PostCSS'
  | 'PostgreSQL'
  | 'Progressive Web Apps'
  | 'PostHog'
  | 'Pre-commit'
  | 'Prettier'
  | 'Pydantic'
  | 'Pydantic AI'
  | 'Pyenv'
  | 'Pyrefly'
  | 'Pytest'
  | 'Python'
  | 'R2 Storage'
  | 'React Router'
  | 'React'
  | 'Redis'
  | 'Redux'
  | 'RTK Query'
  | 'Ruff'
  | 'Selenium'
  | 'Sentry'
  | 'SFTP'
  | 'Salesforce API'
  | 'Shopify API'
  | 'SonarQube'
  | 'SQLite'
  | 'Stripe'
  | 'Storybook'
  | 'Stylelint'
  | 'Sumsub'
  | 'Swift'
  | 'Tailscale'
  | 'TanStack Router'
  | 'Slack API'
  | 'Telegram API'
  | 'Testing Library'
  | 'Tempo API'
  | 'Trello'
  | 'Twilio'
  | 'Typesense'
  | 'TypeScript'
  | 'Ubuntu'
  | 'UML'
  | 'Unit Testing'
  | 'UV'
  | 'Vite'
  | 'Vitest'
  | 'Virtual Machines'
  | 'VS Code'
  | 'Warp'
  | 'WebSockets'
  | 'WebView'
  | 'Xcode'
  | 'XML'
  | 'Yahoo Finance API'
  | 'Yarn'
  | 'Zod'
  | "Let's Encrypt"

export type Skill = {
  icon?: SkillIcon
  label: SkillLabel
  adopted?: Date
}

export const sebnSkills: Skill[] = [
  { icon: 'php', label: 'PhP' },
  { icon: 'laravel', label: 'Laravel' },
  { icon: 'javascript', label: 'JS' },
  { icon: 'css3', label: 'CSS' },
  { icon: 'html5', label: 'HTML' },
  { label: 'DHCP' },
  { label: 'Active Directory' },
  { icon: 'nginx', label: 'Nginx' },
  { label: 'Docker' },
  { icon: 'mysql', label: 'MySQL' },
  { icon: 'mariadb', label: 'MariaDB' },
  { icon: 'stripe', label: 'Stripe' },
  { icon: 'linux', label: 'Linux' },
  { icon: 'debian', label: 'Debian' },
  { icon: 'python', label: 'Python' },
  { icon: 'django', label: 'Django' },
  { label: 'DRF' },
  { icon: 'celery', label: 'Celery' },
  { icon: 'react', label: 'React' },
  { icon: 'electron', label: 'Electron JS' },
  { icon: 'prettier', label: 'Prettier' },
  { icon: 'eslint', label: 'ESLint' },
  { icon: 'vite', label: 'Vite' },
  { icon: 'reactrouter', label: 'React Router' },
  { icon: 'redux', label: 'Redux' },
  { icon: 'mui', label: 'Material UI' },
  { icon: 'sysaid', label: 'SysAid' },
  { label: 'Telegram API' },
]

export const coaxSkills: Skill[] = [
  { icon: 'fastapi', label: 'FastAPI' },
  { icon: 'pydantic', label: 'Pydantic' },
  { icon: 'mongodb', label: 'MongoDB' },
  { icon: 'postgresql', label: 'PostgreSQL' },
  { icon: 'sentry', label: 'Sentry' },
  { icon: 'redis', label: 'Redis' },
  { icon: 'pandas', label: 'Pandas' },
  { icon: 'numpy', label: 'NumPy' },
  { icon: 'uml', label: 'UML' },
  { icon: 'githubactions', label: 'Github Actions' },
  { icon: 'swagger', label: 'DRF Spectacular' },
  { icon: 'typescript', label: 'TypeScript' },
  { icon: 'mermaid', label: 'Mermaid JS' },
  { label: 'Mailjet' },
  { icon: 'mailgun', label: 'Mailgun' },
  { icon: 'openai', label: 'OpenAI api' },
  { label: 'Load Testing' },
  { label: 'Locust' },
  { label: 'Unit Testing' },
  { icon: 'pytest', label: 'Pytest' },
  { label: 'Yahoo Finance API' },
  { icon: 'shopify', label: 'Shopify API' },
  { icon: 'facebook', label: 'Facebook API' },
  { icon: 'instagram', label: 'Instagram API' },
  { icon: 'pinterest', label: 'Pinterest API' },
  { icon: 'googletranslate', label: 'Google Translate API' },
  { icon: 'googlecalendar', label: 'Google Calendar API' },
  { label: 'Google Merchant API' },
  { icon: 'twilio', label: 'Twilio' },
  { icon: 'paypal', label: 'PayPal' },
  { icon: 'algolia', label: 'Algolia' },
  { icon: 'jira', label: 'Jira' },
  { icon: 'precommit', label: 'Pre-commit' },
  { icon: 'ruff', label: 'Ruff' },
  { icon: 'amazons3', label: 'AWS S3' },
  { icon: 'sonarqube', label: 'SonarQube' },
  { icon: 'awslambda', label: 'AWS Lambda' },
  { icon: 'amazonec2', label: 'AWS EC2' },
  { icon: 'amazonrds', label: 'AWS RDS' },
  { icon: 'amazonsqs', label: 'AWS SQS' },
  { icon: 'antdesign', label: 'Ant Design' },
  { label: 'AWS SNS' },
  { icon: 'amazonelasticache', label: 'AWS ElastiCache' },
  { icon: 'elasticsearch', label: 'Elasticsearch' },
  { icon: 'github', label: 'Github API' },
  { icon: 'jira', label: 'Jira API' },
  { icon: 'opentelemetry', label: 'Open Telemetry' },
  { label: 'Slack API' },
  { label: 'Tempo API' },
]

export const planeksSkills: Skill[] = [
  { label: 'Android Studio' },
  { label: 'App Store Connect' },
  { icon: 'selenium', label: 'Selenium' },
  { icon: 'netdata', label: 'Netdata' },
  { icon: 'tailscale', label: 'Tailscale' },
  { icon: 'caddy', label: 'Caddy' },
  { icon: 'hetzner', label: 'Hetzner Cloud' },
  { icon: 'letsencrypt', label: "Let's Encrypt" },
  { icon: 'cloudflare', label: 'Cloudflare Zero Trust' },
  { icon: 'digitalocean', label: 'Digital Ocean' },
  { icon: 'nextdotjs', label: 'NextJS' },
  { icon: 'stylelint', label: 'Stylelint' },
  { icon: 'minio', label: 'MinIO' },
  { icon: 'htmx', label: 'HTMX' },
  { label: 'djlint' },
  { icon: 'xml', label: 'XML' },
  { label: 'R2 Storage' },
  { icon: 'uv', label: 'UV' },
  { label: 'SFTP' },
  { icon: 'leaflet', label: 'Leaflet' },
  { label: 'Hyperscript' },
  { label: 'OAuth2' },
  { label: 'Office 365 API' },
  { icon: 'bootstrap', label: 'Bootstrap' },
  { icon: 'mantine', label: 'Mantine UI' },
  { icon: 'trello', label: 'Trello' },
  { label: 'Android' },
  { label: 'AsyncAPI' },
  { label: 'Django Channels' },
  { label: 'DocuSign API' },
  { label: 'Firebase Cloud Messaging' },
  { label: 'Google Maps API' },
  { label: 'Google Play Console' },
  { label: 'Gradle' },
  { label: 'i18next' },
  { label: 'MJML' },
  { label: 'Mobile App Publishing' },
  { label: 'Playwright' },
  { label: 'PostCSS' },
  { label: 'PostHog' },
  { label: 'Progressive Web Apps' },
  { label: 'Pydantic AI' },
  { label: 'RTK Query' },
  { label: 'Salesforce API' },
  { label: 'Storybook' },
  { label: 'Sumsub' },
  { label: 'Swift' },
  { label: 'TanStack Router' },
  { label: 'Testing Library' },
  { label: 'Typesense' },
  { label: 'Vitest' },
  { label: 'WebSockets' },
  { label: 'WebView' },
  { label: 'Xcode' },
  { label: 'Zod' },
]

export const tools: Skill[] = [
  { icon: 'adminer', label: 'Adminer' },
  { icon: 'git', label: 'Git' },
  { icon: 'github', label: 'GitHub' },
  { icon: 'dbeaver', label: 'DBeaver' },
  { icon: 'docker', label: 'Docker' },
  { icon: 'excalidraw', label: 'Excalidraw' },
  { icon: 'freshdesk', label: 'Freshdesk' },
  { label: 'VS Code' },
  { icon: 'githubcopilot', label: 'GitHub Copilot' },
  { label: 'NPM' },
  { icon: 'biome', label: 'Biome' },
  { icon: 'yarn', label: 'Yarn' },
  { icon: 'poetry', label: 'Poetry' },
  { label: 'Pyenv' },
  { icon: 'hoppscotch', label: 'Hoppscotch' },
  { icon: 'nvm', label: 'NVM' },
  { icon: 'warp', label: 'Warp' },
  { icon: 'figma', label: 'Figma' },
  { icon: 'macos', label: 'MacOS' },
  { icon: 'obsidian', label: 'Obsidian' },
  { icon: 'metabase', label: 'Metabase' },
  { icon: 'sqlite', label: 'SQLite' },
  { icon: 'ubuntu', label: 'Ubuntu' },
  { label: 'Virtual Machines' },
  { label: 'Astro' },
  { label: 'Pyrefly' },
]

export type SkillProficiency = 'core' | 'proficient' | 'familiar'

const coreSkills: ReadonlySet<SkillLabel> = new Set([
  'Celery',
  'Django',
  'Docker',
  'DRF',
  'Git',
  'JS',
  'Linux',
  'PostgreSQL',
  'Python',
  'React',
  'Redis',
  'Redux',
  'TypeScript',
  'Unit Testing',
])

const proficientSkills: ReadonlySet<SkillLabel> = new Set([
  'Algolia',
  'AWS EC2',
  'AWS S3',
  'AWS SQS',
  'Biome',
  'Bootstrap',
  'Caddy',
  'CSS',
  'Digital Ocean',
  'Django Channels',
  'DRF Spectacular',
  'Electron JS',
  'Elasticsearch',
  'FastAPI',
  'Firebase Cloud Messaging',
  'Github Actions',
  'HTML',
  'HTMX',
  'i18next',
  'Leaflet',
  'Mantine UI',
  'Material UI',
  'MJML',
  'MySQL',
  'Nginx',
  'NumPy',
  'OAuth2',
  'Office 365 API',
  'OpenAI api',
  'Pandas',
  'Playwright',
  'Poetry',
  'Pre-commit',
  'Progressive Web Apps',
  'Pydantic',
  'Pyrefly',
  'Pytest',
  'R2 Storage',
  'React Router',
  'RTK Query',
  'Ruff',
  'Salesforce API',
  'Selenium',
  'Sentry',
  'Storybook',
  'Stripe',
  'Stylelint',
  'Testing Library',
  'Twilio',
  'UV',
  'Vite',
  'Vitest',
  'Virtual Machines',
  'WebSockets',
  'WebView',
  'XML',
  'Yarn',
  'Zod',
])

export const getSkillProficiency = (label: SkillLabel): SkillProficiency => {
  if (coreSkills.has(label)) {
    return 'core'
  }
  if (proficientSkills.has(label)) {
    return 'proficient'
  }
  return 'familiar'
}

export const cvSkillGroups: { label: string; skills: SkillLabel[] }[] = [
  {
    label: 'Backend',
    skills: ['Python', 'Django', 'DRF', 'FastAPI', 'Celery', 'Pydantic', 'WebSockets'],
  },
  {
    label: 'Frontend',
    skills: ['JS', 'TypeScript', 'React', 'Redux', 'RTK Query', 'HTML', 'CSS'],
  },
  {
    label: 'Data and infrastructure',
    skills: [
      'PostgreSQL',
      'Redis',
      'MySQL',
      'Docker',
      'Linux',
      'Virtual Machines',
      'Nginx',
      'Elasticsearch',
    ],
  },
  {
    label: 'Quality and delivery',
    skills: ['Unit Testing', 'Pytest', 'Playwright', 'Git', 'Github Actions', 'Sentry', 'Ruff'],
  },
]

export type Domain =
  | 'Healthcare'
  | 'Fintech'
  | 'E-commerce'
  | 'Automotive'
  | 'Manufacturing'
  | 'Logistics'
  | 'Telecom'
  | 'Real Estate'
  | 'Human Resources'
export const domains: Domain[] = [
  'Healthcare',
  'Fintech',
  'E-commerce',
  'Automotive',
  'Manufacturing',
  'Logistics',
  'Telecom',
  'Real Estate',
  'Human Resources',
]

export const sebnProjects: Project[] = [
  {
    description:
      'Custom client for ACPV workplaces (specifically for electronic wire shrinking) that integrates key features such as the reimplementation of an existing login system from another production environment, utilizing pre-existing users and permissions. The system performs real-time checks on each element’s status to ensure that only completed and non-faulty parts are processed. Additionally, it updates the production system’s status once the process is finished, ensuring seamless workflow and accuracy in the production line.',
    domain: 'Manufacturing',
    end: new Date('2021-03-31'),
    name: 'Acpv client',
    start: new Date('2020-02-02'),
    technologies: [
      { icon: 'django', label: 'Django' },
      { icon: 'mysql', label: 'MySQL' },
      { icon: 'electron', label: 'Electron JS' },
    ],
  },
  {
    description:
      'Notification system for the SysAid ticketing system, which was missing in the current version, also to create scheduled reports, and inject extra metadata to notifications (location of workplace that submitted incident by Material request manager API ) As notification channel Telegram API was used',
    domain: 'Telecom',
    end: new Date('2021-08-30'),
    name: 'SysAid Reporter',
    start: new Date('2020-09-02'),
    technologies: [
      { icon: 'django', label: 'Django' },
      { icon: 'mysql', label: 'MySQL' },
      { icon: 'celery', label: 'Celery' },
      { label: 'Telegram API' },
    ],
  },
  {
    description:
      'This project enables the planning department to monitor stocks of semi-finished goods and other components, allowing them to set quantity thresholds for alerts to be sent to the relevant personnel. It also provides insights into the consumption history of components. Data is sourced from the external legacy ERP system AS400.',
    domain: 'Logistics',
    end: new Date('2022-05-30'),
    name: 'Stock Tracking',
    start: new Date('2020-09-02'),
    technologies: [
      { icon: 'django', label: 'Django' },
      { icon: 'mysql', label: 'MySQL' },
      { icon: 'celery', label: 'Celery' },
      { label: 'Telegram API' },
    ],
  },
  {
    description:
      'This project serves as a client for multiple databases (Microsoft SQL, IBM db2, Proprietary in memory storage on ERP systems). It allows other projects to use connections for these sources as API, and developers to create custom queries, and set caching for endpoints. It have site-level authorization with an API token.',
    domain: 'Manufacturing',
    end: new Date('2021-10-30'),
    name: 'Production API',
    start: new Date('2021-03-02'),
    technologies: [
      { icon: 'django', label: 'Django' },
      { icon: 'mysql', label: 'MySQL' },
      { icon: 'celery', label: 'Celery' },
    ],
  },
  {
    description:
      'Tool for the logistic department designed to be used on mobile handheld devices Zebra EC30 to check for blocked assembly before sending it to conveyor line, to eliminate wasted time for 40+ on conveyor workplaces',
    domain: 'Logistics',
    end: new Date('2021-04-30'),
    name: 'Blocked Assemblies Checker',
    start: new Date('2021-04-01'),
    technologies: [
      { icon: 'react', label: 'React' },
      { icon: 'mui', label: 'Material UI' },
    ],
  },
  {
    description:
      'The Workplace Instruction Manager is a system that delivers contextual assembly instructions tailored to the specific product being assembled at a given workplace. It integrates seamlessly with proprietary production systems to ensure accurate, real-time guidance. Additionally, it features an Electron-based client, enabling access to local PC resources for tasks such as label printing, enhancing the overall efficiency of the assembly process.',
    domain: 'Manufacturing',
    end: new Date('2021-09-30'),
    name: 'Workplace Instructions Manager',
    start: new Date('2021-05-02'),
    technologies: [
      { icon: 'django', label: 'Django' },
      { icon: 'django', label: 'DRF' },
      { icon: 'electron', label: 'Electron JS' },
      { icon: 'react', label: 'React' },
      { label: 'Vite' },
      { label: 'React Router' },
      { label: 'Redux' },
      { icon: 'mui', label: 'Material UI' },
      { icon: 'mysql', label: 'MySQL' },
      { icon: 'celery', label: 'Celery' },
    ],
  },
  {
    description:
      'The Material Request Manager is a comprehensive system designed to streamline the ordering of materials such as wires, semi-finished goods, and other components directly from the workplace. It also provides a user-friendly API for accessing floor and area plans, ensuring precise workplace locations for various services. This integration significantly reduces the time needed to add materials to workplaces while minimizing labor costs.The system features a client interface that enables workplaces to access material suggestions based on current orders and view their material request history. Meanwhile, the material provider interface displays workplace locations with new material requests, indicating available quantities in production or logistic areas and guiding users on where to find them. Additionally, a planning page allows users to create new workplaces or modify existing ones on the map, update floor area layouts, and ensure optimal material placement for improved workflow efficiency. With these functionalities, the Material Request Manager greatly enhances material management processes, leading to increased productivity and reduced operational costs',
    domain: 'Manufacturing',
    end: new Date('2022-05-30'),
    name: 'Material Requests Manager',
    start: new Date('2021-01-01'),
    technologies: [
      { icon: 'django', label: 'Django' },
      { icon: 'django', label: 'DRF' },
      { icon: 'electron', label: 'Electron JS' },
      { icon: 'react', label: 'React' },
      { label: 'i18next' },
      { label: 'Vite' },
      { label: 'React Router' },
      { label: 'Redux' },
      { icon: 'mui', label: 'Material UI' },
      { icon: 'mysql', label: 'MySQL' },
      { icon: 'celery', label: 'Celery' },
    ],
  },
]

export const coaxProjects: Project[] = [
  {
    description:
      'Comprehensive Social & Financial platform that enables users to simulate expenditure and income outcomes via the powerful Monte Carlo algorithm. The platform will seamlessly integrate with Yahoo Finance to access real-time currency pricing and historical data for ticker assets. Moreover, it will offer a range of robust methods for asset analysis such as CAPM, Historical Mean, and Custom models. The backend will be powered by FastAPI for executing complex mathematical calculations and running the Monte Carlo model efficiently, while the frontend will be supported by Django DRF for managing all other aspects including social networking features, saving and versioning of scenarios, and creating customizable templates for users.',
    end: new Date('2022-12-30'),
    name: 'Net Worth Tracker',
    start: new Date('2022-06-01'),
    technologies: [
      { icon: 'django', label: 'Django' },
      { icon: 'django', label: 'DRF' },
      { icon: 'fastapi', label: 'FastAPI' },
      { icon: 'react', label: 'React' },
      { icon: 'numpy', label: 'NumPy' },
      { icon: 'pandas', label: 'Pandas' },
      { icon: 'amazonec2', label: 'AWS EC2' },
      { icon: 'amazonsqs', label: 'AWS SQS' },
      { icon: 'nginx', label: 'Nginx' },
      { label: 'Celery' },
      { icon: 'redis', label: 'Redis' },
      { icon: 'postgresql', label: 'PostgreSQL' },
    ],
  },
  {
    description:
      'Revolutionizing personal health and wellness, our groundbreaking platform offers tailored lifestyle solutions to enhance your well-being. Easily connect with medical experts, receive personalized recommendations directly in your calendar, and track your progress effortlessly. Our innovative algorithm showcases your advancements in different areas based on your consistent efforts, motivating you with vibrant achievements along the way.',
    end: new Date('2023-11-30'),
    name: 'Mental health/lifestyle platform',
    start: new Date('2022-12-31'),
    technologies: [
      { icon: 'django', label: 'Django' },
      { icon: 'django', label: 'DRF' },
      { icon: 'fastapi', label: 'FastAPI' },
      { icon: 'react', label: 'React' },
      { icon: 'mui', label: 'Material UI' },
      { icon: 'twilio', label: 'Twilio' },
      { icon: 'stripe', label: 'Stripe' },
      { icon: 'googletranslate', label: 'Google Translate API' },
      { icon: 'googlecalendar', label: 'Google Calendar API' },
      { icon: 'numpy', label: 'NumPy' },
      { icon: 'pandas', label: 'Pandas' },
      { icon: 'amazonec2', label: 'AWS EC2' },
      { icon: 'amazonsqs', label: 'AWS SQS' },
      { label: 'Celery' },
      { icon: 'nginx', label: 'Nginx' },
      { icon: 'redis', label: 'Redis' },
      { icon: 'postgresql', label: 'PostgreSQL' },
    ],
  },
  {
    description:
      'One of the leading antique marketplaces in the UK, renowned for its user-friendly search and filtering tools, exceptional flexibility, and cutting-edge features tailored for sellers, accompanied by outstanding SEO performance.',
    end: new Date('2023-11-30'),
    name: 'Antique Seller CRM/Shop',
    start: new Date('2022-12-31'),
    technologies: [
      { icon: 'django', label: 'Django' },
      { icon: 'django', label: 'DRF' },
      { icon: 'twilio', label: 'Twilio' },
      { icon: 'stripe', label: 'Stripe' },
      { icon: 'paypal', label: 'PayPal' },
      { icon: 'algolia', label: 'Algolia' },
      { icon: 'facebook', label: 'Facebook API' },
      { icon: 'instagram', label: 'Instagram API' },
      { icon: 'pinterest', label: 'Pinterest API' },
      { label: 'Google Merchant API' },
      { icon: 'sentry', label: 'Sentry' },
      { icon: 'react', label: 'React' },
      { icon: 'mui', label: 'Material UI' },
      { icon: 'amazonec2', label: 'AWS EC2' },
      { icon: 'amazonsqs', label: 'AWS SQS' },
      { icon: 'nginx', label: 'Nginx' },
      { icon: 'redis', label: 'Redis' },
      { icon: 'postgresql', label: 'PostgreSQL' },
    ],
  },
  {
    description:
      'The GitHub Repo Analyzer is an internal service built with FastAPI and the GitHub API SDK, designed to provide enhanced statistics for each repository and user. It integrates seamlessly with JIRA and TEMPO, offering comprehensive insights into project progress by combining repository data with task tracking and time management metrics. This integration allows for more informed decision-making and a clearer view of development progress across teams and projects.',
    end: new Date('2023-11-30'),
    name: 'Github repo analyzer',
    start: new Date('2023-09-31'),
    technologies: [
      { icon: 'fastapi', label: 'FastAPI' },
      { icon: 'github', label: 'Github API' },
      { icon: 'jira', label: 'Jira API' },
      { label: 'Tempo API' },
      { icon: 'nginx', label: 'Nginx' },
      { icon: 'redis', label: 'Redis' },
      { icon: 'postgresql', label: 'PostgreSQL' },
    ],
  },
]

export const planeksProjects: Project[] = [
  {
    description:
      'A web platform for managing property listings and reservations. I contributed to full-stack features, integrations, notifications, real-time updates, and supporting infrastructure.',
    domain: 'Real Estate',
    name: 'Housing booking platform',
    start: new Date('2026-05-28'),
    technologies: [
      { icon: 'django', label: 'Django' },
      { icon: 'django', label: 'DRF' },
      { icon: 'react', label: 'React' },
      { icon: 'typescript', label: 'TypeScript' },
      { icon: 'redux', label: 'Redux' },
      { icon: 'mantine', label: 'Mantine UI' },
      { label: 'TanStack Router' },
      { label: 'RTK Query' },
      { icon: 'celery', label: 'Celery' },
      { label: 'Django Channels' },
      { label: 'WebSockets' },
      { label: 'AsyncAPI' },
      { icon: 'redis', label: 'Redis' },
      { icon: 'postgresql', label: 'PostgreSQL' },
      { icon: 'sentry', label: 'Sentry' },
      { label: 'Playwright' },
      { label: 'Vitest' },
      { icon: 'caddy', label: 'Caddy' },
      { icon: 'docker', label: 'Docker' },
    ],
  },
  {
    description:
      'A digital staffing platform connecting migrant flex workers with Dutch employers in logistics, horticulture, and production. I contributed across the worker and manager journeys, including jobs and applications, housing reservations, messaging, candidate controls, CV upload and asynchronous AI-assisted parsing, application analytics, and integrations with staffing, identity-verification, document-signing, search, and notification services.',
    domain: 'Human Resources',
    name: 'Digital staffing platform',
    start: new Date('2025-08-15'),
    technologies: [
      { icon: 'django', label: 'Django' },
      { icon: 'django', label: 'DRF' },
      { icon: 'react', label: 'React' },
      { icon: 'typescript', label: 'TypeScript' },
      { icon: 'redux', label: 'Redux' },
      { icon: 'mantine', label: 'Mantine UI' },
      { label: 'RTK Query' },
      { icon: 'celery', label: 'Celery' },
      { label: 'Django Channels' },
      { label: 'WebSockets' },
      { icon: 'redis', label: 'Redis' },
      { icon: 'postgresql', label: 'PostgreSQL' },
      { icon: 'openai', label: 'OpenAI api' },
      { label: 'Pydantic AI' },
      { label: 'Salesforce API' },
      { label: 'DocuSign API' },
      { label: 'Firebase Cloud Messaging' },
      { label: 'Typesense' },
      { label: 'PostHog' },
      { label: 'Sumsub' },
      { label: 'Android' },
      { label: 'Swift' },
      { label: 'Progressive Web Apps' },
      { label: 'WebView' },
      { icon: 'sentry', label: 'Sentry' },
      { icon: 'docker', label: 'Docker' },
    ],
  },
  {
    description:
      'End user portal with custom API integration for ExactOnline and external ERP system. Includes user friendly UI for validating data from xls spreadsheets, and robust background API integration with ExactOnline and external ERP system. The platform also features a custom email template engine for sending notifications to users, ensuring seamless communication and data management.',
    domain: 'Logistics',
    end: new Date('2025-06-19'),
    name: 'ExactOnline custom API integration',
    start: new Date('2025-05-19'),
    technologies: [
      { icon: 'django', label: 'Django' },
      { icon: 'django', label: 'DRF' },
      { icon: 'react', label: 'React' },
      { icon: 'redux', label: 'Redux' },
      { icon: 'mantine', label: 'Mantine UI' },
      { label: 'i18next' },
      { icon: 'githubactions', label: 'Github Actions' },
      { label: 'R2 Storage' },
      { icon: 'pydantic', label: 'Pydantic' },
      { icon: 'celery', label: 'Celery' },
      { label: 'MJML' },
      { icon: 'caddy', label: 'Caddy' },
      { icon: 'redis', label: 'Redis' },
      { icon: 'postgresql', label: 'PostgreSQL' },
    ],
  },
  {
    description:
      'The Logistics Insight Platform is a comprehensive web application designed to provide clients with detailed insights into their logistics operations. It features a user-friendly interface that allows users to view and analyze various aspects of their logistics processes, including shipment tracking, inventory management, and performance metrics. The platform integrates seamlessly with third-party services to enhance functionality and provide real-time data updates, ensuring that clients have access to the most accurate and up-to-date information regarding their logistics operations.',
    domain: 'Logistics',
    name: 'Logistics insight platform',
    start: new Date('2024-12-06'),
    technologies: [
      { icon: 'django', label: 'Django' },
      { icon: 'django', label: 'DRF' },
      { icon: 'react', label: 'React' },
      { icon: 'reactrouter', label: 'React Router' },
      { icon: 'redux', label: 'Redux' },
      { icon: 'mantine', label: 'Mantine UI' },
      { label: 'i18next' },
      { label: 'R2 Storage' },
      { icon: 'githubactions', label: 'Github Actions' },
      { icon: 'celery', label: 'Celery' },
      { icon: 'caddy', label: 'Caddy' },
      { icon: 'redis', label: 'Redis' },
      { icon: 'postgresql', label: 'PostgreSQL' },
    ],
  },
  {
    description:
      'The warehouse gate management system is a browser-based application designed to streamline the entry process for truck drivers. By interfacing with third-party services, it automates key tasks such as license plate recognition, booking reference validation, and driver ID verification. This integration enhances the efficiency and accuracy of the gate entry process, reducing wait times and improving overall operational flow within the warehouse.',
    domain: 'Logistics',
    end: new Date('2024-11-30'),
    name: 'Warehouse access control system',
    start: new Date('2024-09-23'),
    technologies: [
      { icon: 'django', label: 'Django' },
      { icon: 'django', label: 'DRF' },
      { icon: 'react', label: 'React' },
      { icon: 'reactrouter', label: 'React Router' },
      { icon: 'redux', label: 'Redux' },
      { icon: 'mantine', label: 'Mantine UI' },
      { label: 'i18next' },
      { icon: 'digitalocean', label: 'Digital Ocean' },
      { icon: 'caddy', label: 'Caddy' },
      { icon: 'redis', label: 'Redis' },
      { icon: 'postgresql', label: 'PostgreSQL' },
    ],
  },
  {
    description:
      "Platform to deliver AI-assisted semantic search to clients based on their data. The client came to us with a prototype mechanism for this search Natural Language Item Search in Infor M3 - YouTube. Working hand in hand with the client's data science department, we took this prototype to a level of fully functional web service, that will streamline the process of delivering search for end users",
    domain: 'Logistics',
    end: new Date('2024-07-30'),
    name: 'AI search platform',
    start: new Date('2024-06-27'),
    technologies: [
      { icon: 'django', label: 'Django' },
      { icon: 'django', label: 'DRF' },
      { icon: 'react', label: 'React' },
      { icon: 'redux', label: 'Redux' },
      { icon: 'mantine', label: 'Mantine UI' },
      { icon: 'numpy', label: 'NumPy' },
      { icon: 'pandas', label: 'Pandas' },
      { icon: 'digitalocean', label: 'Digital Ocean' },
      { icon: 'caddy', label: 'Caddy' },
      { icon: 'redis', label: 'Redis' },
      { icon: 'postgresql', label: 'PostgreSQL' },
    ],
  },
  {
    description:
      'AI is a biotech intelligence platform that consolidates information on drugs and companies, providing users with valuable insights into the current landscape of the biotech industry.',
    domain: 'Healthcare',
    end: new Date('2024-09-30'),
    name: 'API for drugs and investments',
    start: new Date('2024-08-05'),
    technologies: [
      { icon: 'fastapi', label: 'FastAPI' },
      { icon: 'pydantic', label: 'Pydantic' },
      { icon: 'caddy', label: 'Caddy' },
      { icon: 'redis', label: 'Redis' },
      { icon: 'mongodb', label: 'MongoDB' },
    ],
  },
  {
    description:
      'Customs is a portal for clients of a Netherlands logistics company. It provides users with an interactive and fast way to submit customs documents, provide seamless delivery of goods, and freight tracking along the shipment lifecycle. Behind the scenes, we are handling direct integration with the government customs system via XML file transfers. Also as a part of the client ecosystem, we integrated our emailing/reporting to Office365 via API',
    domain: 'Logistics',
    end: new Date('2024-07-30'),
    name: 'Customs portal',
    start: new Date('2024-05-01'),
    technologies: [
      { icon: 'django', label: 'Django' },
      { icon: 'bootstrap', label: 'Bootstrap' },
      { icon: 'htmx', label: 'HTMX' },
      { icon: 'digitalocean', label: 'Digital Ocean' },
      { label: 'SFTP' },
      { label: 'XML' },
      { label: 'Celery' },
      { icon: 'caddy', label: 'Caddy' },
      { icon: 'redis', label: 'Redis' },
      { icon: 'postgresql', label: 'PostgreSQL' },
    ],
  },
  {
    description:
      'Fulfillment is a portal for clients of logistic company. It allows clients to streamline common operations. With fulfillment clients can effortlessly track incoming and outgoing orders, access detailed order information, and receive real-time notifications from the internal ERP system. Plus, our user-friendly interface includes a range of convenient features such as customizable reports and seamless integration with external API (https://frends.com/). We created a dedicated authorization service that enables Single Sign-On (SSO) across all existing portals. So the clients can enjoy a seamless and uninterrupted login experience across all 3 existing portals',
    domain: 'Logistics',
    end: new Date('2024-05-30'),
    name: 'Fulfillment portal',
    start: new Date('2024-02-30'),
    technologies: [
      { icon: 'django', label: 'Django' },
      { icon: 'bootstrap', label: 'Bootstrap' },
      { label: 'Celery' },
      { icon: 'htmx', label: 'HTMX' },
      { icon: 'digitalocean', label: 'Digital Ocean' },
      { icon: 'caddy', label: 'Caddy' },
      { icon: 'redis', label: 'Redis' },
      { icon: 'postgresql', label: 'PostgreSQL' },
    ],
  },
  {
    description:
      'Product that allows automating choosing the right insurance type according to the user’s preferences. The application involves the creation and conduct of surveys among potential customers. Platform is simple to use and easy to understand. It allows users to view all the offers of Swiss health insurance companies classified according to those that suit them best in just a few minutes. Users can customize their search to suit their needs, budget and view the pros and cons of each offer for quick and easy comparison.',
    domain: 'Fintech',
    end: new Date('2024-04-30'),
    name: 'Insurance picker platform',
    start: new Date('2024-04-01'),
    technologies: [
      { icon: 'django', label: 'Django' },
      { icon: 'bootstrap', label: 'Bootstrap' },
      { icon: 'digitalocean', label: 'Digital Ocean' },
      { icon: 'caddy', label: 'Caddy' },
      { icon: 'redis', label: 'Redis' },
      { icon: 'postgresql', label: 'PostgreSQL' },
    ],
  },
  {
    description:
      'The Property Listing Automation tool is a powerful internal tool designed to enhance the analysis of the real estate market in the UK. It leverages a vast amount of data(For example 9 GB table with historical data for calculating KPI) from two of the most popular real estate websites, Zoopla and Rightmove, to provide comprehensive insights and automation capabilities(For example: Finding UK area with the lowest rent price for last 12 month, automatically generate offer price for all listings in this area code, and send offer to each of them)',
    domain: 'Real Estate',
    end: new Date('2024-02-30'),
    name: 'Property listing automation',
    start: new Date('2023-11-31'),
    technologies: [
      { icon: 'django', label: 'Django' },
      { icon: 'selenium', label: 'Selenium' },
      { icon: 'bootstrap', label: 'Bootstrap' },
      { icon: 'htmx', label: 'HTMX' },
      { icon: 'digitalocean', label: 'Digital Ocean' },
      { icon: 'caddy', label: 'Caddy' },
      { icon: 'redis', label: 'Redis' },
      { icon: 'postgresql', label: 'PostgreSQL' },
    ],
  },
]

type AudioBookSeries = {
  name: string
  link?: string
  description: string
  total_count: number
  current_count: number
  current_book: string
}

export const audioBookSeries: AudioBookSeries[] = [
  {
    current_book: 'Age of Darkness',
    current_count: 16,
    description:
      'Let the galaxy burn! The Horus Heresy is a series of novels set in the Warhammer 40,000 universe, chronicling the events of the galaxy-spanning civil war that nearly destroyed',
    link: 'https://www.amazon.com/The-Horus-Heresy-54-book-series/dp/B0CQ2PKBFW',
    name: 'Warhammer 40K Horus Heresy',
    total_count: 54,
  },
  {
    current_book: 'Hereticus',
    current_count: 3,
    description:
      'The Eisenhorn trilogy is a series of novels set in the Warhammer 40,000 universe, following the Inquisitor Gregor Eisenhorn as he battles heresy and corruption within the Imperium.',
    link: 'https://www.amazon.com/s?k=Eisenhorn&i=digital-text&crid=3F9SYPCFKBRY1&sprefix=eisenhorn%2Cdigital-text%2C184&ref=nb_sb_noss_2',
    name: 'Eisenhorn',
    total_count: 3,
  },
  {
    current_book: 'The Infinite and Divine',
    current_count: 1,
    description:
      'The Infinite and Divine is a novel set in the Warhammer 40,000 universe, exploring the conflict between the Necron and the Aeldari.',
    link: 'https://www.amazon.com/s?k=The+Infinite+and+Divine&i=digital-text&crid=3F9SYPCFKBRY1&sprefix=the+infinite+and+divine%2Cdigital-text%2C184&ref=nb_sb_noss_2',
    name: 'The Infinite and Divine',
    total_count: 1,
  },
  {
    current_book: 'Leviathan Falls',
    current_count: 8,
    description:
      'Mars, Earth, and the Asteroid Belt are the three main powers in a colonized solar system. The Expanse series follows a disparate band of antiheroes as they navigate political intrigue, alien technology, and the mysteries of the universe.',
    link: 'https://www.amazon.com/s?k=The+expanse&i=digital-text&crid=30HCA7RBWZCF2&sprefix=the+expans%2Cdigital-text%2C241&ref=nb_sb_noss_2',
    name: 'The Expanse',
    total_count: 9,
  },
  {
    current_book: 'Time of Contempt',
    current_count: 3,
    description:
      'The Witcher series follows Geralt of Rivia, a monster hunter navigating a world filled with magic, political intrigue, and moral ambiguity.',
    link: 'https://www.amazon.com/s?k=The+Witcher&i=digital-text&crid=3F9SYPCFKBRY1&sprefix=the+witcher%2Cdigital-text%2C184&ref=nb_sb_noss_2',
    name: 'Witcher',
    total_count: 9,
  },
  {
    current_book: 'The End and the Death Volume 3',
    current_count: 10,
    description: 'The final chapter of the Horus Heresy, lay down foundation for the 40K setting',
    link: 'https://www.amazon.com/s?k=The+Horus+Heresy%3A+Siege+of+Terra&i=digital-text&crid=3F9SYPCFKBRY1&sprefix=the+horus+heresy+siege+of+terra%2Cdigital-text%2C184&ref=nb_sb_noss_2',
    name: 'Warhammer 40K Siege of Terra',
    total_count: 10,
  },
  {
    current_book: 'A Clash of Kings',
    current_count: 1,
    description:
      'A Song of Ice and Fire is a series of epic fantasy novels by American author George R. R. Martin, set in the fictional continents of Westeros and Essos.',
    link: 'https://www.amazon.com/s?k=Song+of+Ice+and+Fire&i=digital-text&crid=3F9SYPCFKBRY1&sprefix=song+of+ice+and+fire%2Cdigital-text%2C184&ref=nb_sb_noss_2',
    name: 'Song of Ice and Fire',
    total_count: 7,
  },
]
