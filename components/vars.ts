import {
  Icon,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconReportAnalytics,
} from '@tabler/icons-react';

type skill = {
  icon?: string;
  label: string;
  adopted?: Date;
};
type project = {
  name: string;
  start: Date;
  end: Date;
};

type SocialLink = {
  label: string;
  url: string;
  icon: Icon;
};
export const SocialLinks: SocialLink[] = [
  { label: 'Coding stats', icon: IconReportAnalytics, url: 'https://wakatime.com/@Dufran' },
  {
    label: 'LinkedIn',
    icon: IconBrandLinkedin,
    url: 'https://www.linkedin.com/in/oleksandr-korol/',
  },
  {
    icon: IconBrandGithub,
    label: 'Github',
    url: 'https://github.com/Dufran',
  },
  {
    icon: IconMail,
    label: 'Contact',
    url: 'mailto:korol.oleksandr.work@gmail.com',
  },
];
export const sebnSkills: skill[] = [
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
];

export const coaxSkills: skill[] = [
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
];

export const planeksSkills: skill[] = [
  { icon: 'selenium', label: 'Selenium' },
  { icon: 'netdata', label: 'Netdata' },
  { icon: 'caddy', label: 'Caddy' },
  { icon: 'letsencrypt', label: "Let's Encrypt" },
  { icon: 'cloudflare', label: 'Cloudflare Zero Trust' },
  { icon: 'digitalocean', label: 'Digital Ocean' },
  { icon: 'nextdotjs', label: 'NextJS' },
  { icon: 'stylelint', label: 'Stylelint' },
  { icon: 'minio', label: 'MinIO' },
  { icon: 'htmx', label: 'HTMX' },
  { label: 'djlint' },
  { label: 'xml' },
  { icon: 'leaflet', label: 'Leaflet' },
  { label: 'Hyperscript' },
  { label: 'OAuth2' },
  { label: 'Office 365 API' },
  { icon: 'bootstrap', label: 'Bootstrap' },
  { icon: 'mantine', label: 'Mantine UI' },
  { icon: 'trello', label: 'Trello' },
];

export const tools: skill[] = [
  { icon: 'git', label: 'Git' },
  { icon: 'github', label: 'GitHub' },
  { icon: 'dbeaver', label: 'DBeaver' },
  { icon: 'docker', label: 'Docker' },
  { label: 'VS Code' },
  { label: 'NPM' },
  { icon: 'yarn', label: 'Yarn' },
  { icon: 'poetry', label: 'Poetry' },
  { label: 'Pyenv' },
  { icon: 'hoppscotch', label: 'Hoppscotch' },
  { icon: 'nvm', label: 'NVM' },
  { icon: 'warp', label: 'Warp' },
  { icon: 'figma', label: 'Figma' },
  { icon: 'macos', label: 'MacOS' },
  { icon: 'obsidian', label: 'Obsidian' },
];

export const domains: string[] = [
  'Healthcare',
  'Fintech',
  'E-commerce',
  'Automotive',
  'Manufacturing',
  'Logistics',
  'Telecom',
  'Real Estate',
];

export const sebnProjects: project[] = [
  { name: 'Acpv client', start: new Date('2020-02-02'), end: new Date('2021-03-31') },
  { name: 'SysAid Reporter', start: new Date('2020-09-02'), end: new Date('2021-08-30') },
  { name: 'Stock Tracking', start: new Date('2020-09-02'), end: new Date('2022-05-30') },
  { name: 'Production API', start: new Date('2021-03-02'), end: new Date('2021-10-30') },
  {
    name: 'Blocked Assemblies Checker',
    start: new Date('2021-04-01'),
    end: new Date('2021-04-30'),
  },
  {
    name: 'Workplace Instructions Manager',
    start: new Date('2021-05-02'),
    end: new Date('2021-09-30'),
  },
  { name: 'Material Requests Manager', start: new Date('2021-01-01'), end: new Date('2022-05-30') },
];

export const coaxProjects: project[] = [
  {
    name: 'Net Worth Tracker',
    start: new Date('2022-06-01'),
    end: new Date('2022-12-30'),
  },
  {
    name: 'Mental health/lifestyle platform',
    start: new Date('2022-12-31'),
    end: new Date('2023-11-30'),
  },
  {
    name: 'Antique Seller CRM/Shop',
    start: new Date('2022-12-31'),
    end: new Date('2023-11-30'),
  },
  {
    name: 'Github repo analyzer',
    start: new Date('2023-09-31'),
    end: new Date('2023-11-30'),
  },
];

export const planeksProjects: project[] = [
  {
    name: 'Property listing automation',
    start: new Date('2023-11-31'),
    end: new Date('2024-02-30'),
  },
  {
    name: 'Fulfillment portal',
    start: new Date('2024-02-30'),
    end: new Date('2024-05-30'),
  },
  {
    name: 'Insurance collection website',
    start: new Date('2024-04-01'),
    end: new Date('2024-04-30'),
  },
  {
    name: 'Customs portal',
    start: new Date('2024-05-01'),
    end: new Date('2024-07-30'),
  },
  {
    name: 'AI search platform',
    start: new Date('2024-06-27'),
    end: new Date('2024-07-30'),
  },
  {
    name: 'API for drugs and investments',
    start: new Date('2024-08-05'),
    end: new Date('2024-09-30'),
  },
  {
    name: 'Warehouse access control system',
    start: new Date('2024-09-23'),
    end: new Date('2024-10-30'),
  },
];
