import {
  Icon,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconReportAnalytics,
} from '@tabler/icons-react';

type project = {
  name: string;
  description?: string;
  start: Date;
  end: Date;
  domain?: Domain;
  technologies?: Skill[];
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
type SkillIcon =
  | 'php'
  | 'laravel'
  | 'javascript'
  | 'css3'
  | 'html5'
  | 'nginx'
  | 'mysql'
  | 'mariadb'
  | 'stripe'
  | 'linux'
  | 'debian'
  | 'python'
  | 'django'
  | 'celery'
  | 'react'
  | 'electron'
  | 'prettier'
  | 'eslint'
  | 'vite'
  | 'reactrouter'
  | 'redux'
  | 'mui'
  | 'fastapi'
  | 'pydantic'
  | 'mongodb'
  | 'postgresql'
  | 'sentry'
  | 'redis'
  | 'pandas'
  | 'numpy'
  | 'uml'
  | 'githubactions'
  | 'swagger'
  | 'typescript'
  | 'mermaid'
  | 'mailgun'
  | 'openai'
  | 'pytest'
  | 'shopify'
  | 'facebook'
  | 'instagram'
  | 'pinterest'
  | 'googletranslate'
  | 'googlecalendar'
  | 'twilio'
  | 'paypal'
  | 'algolia'
  | 'jira'
  | 'precommit'
  | 'ruff'
  | 'amazons3'
  | 'sonarqube'
  | 'awslambda'
  | 'amazonec2'
  | 'amazonrds'
  | 'amazonsqs'
  | 'antdesign'
  | 'amazonelasticache'
  | 'elasticsearch'
  | 'selenium'
  | 'netdata'
  | 'caddy'
  | 'letsencrypt'
  | 'cloudflare'
  | 'digitalocean'
  | 'nextdotjs'
  | 'stylelint'
  | 'minio'
  | 'htmx'
  | 'leaflet'
  | 'bootstrap'
  | 'mantine'
  | 'trello'
  | 'git'
  | 'github'
  | 'dbeaver'
  | 'docker'
  | 'yarn'
  | 'poetry'
  | 'hoppscotch'
  | 'nvm'
  | 'warp'
  | 'figma'
  | 'macos'
  | 'obsidian';

type SkillLabel =
  | 'PhP'
  | 'Laravel'
  | 'JS'
  | 'CSS'
  | 'HTML'
  | 'DHCP'
  | 'Active Directory'
  | 'Nginx'
  | 'Docker'
  | 'MySQL'
  | 'MariaDB'
  | 'Stripe'
  | 'Linux'
  | 'Debian'
  | 'Python'
  | 'Django'
  | 'DRF'
  | 'Celery'
  | 'React'
  | 'Electron JS'
  | 'Prettier'
  | 'ESLint'
  | 'Vite'
  | 'React Router'
  | 'Redux'
  | 'i18next'
  | 'Material UI'
  | 'FastAPI'
  | 'Pydantic'
  | 'MongoDB'
  | 'PostgreSQL'
  | 'Sentry'
  | 'Redis'
  | 'Pandas'
  | 'NumPy'
  | 'UML'
  | 'Github Actions'
  | 'Github API'
  | 'DRF Spectacular'
  | 'TypeScript'
  | 'Mermaid JS'
  | 'Mailjet'
  | 'Mailgun'
  | 'OpenAI api'
  | 'Load Testing'
  | 'Locust'
  | 'Unit Testing'
  | 'Pytest'
  | 'Yahoo Finance API'
  | 'Shopify API'
  | 'Facebook API'
  | 'Instagram API'
  | 'Pinterest API'
  | 'Google Translate API'
  | 'Google Calendar API'
  | 'Google Merchant API'
  | 'Twilio'
  | 'Tempo API'
  | 'PayPal'
  | 'Algolia'
  | 'Jira'
  | 'Jira API'
  | 'Pre-commit'
  | 'Ruff'
  | 'AWS S3'
  | 'SonarQube'
  | 'AWS Lambda'
  | 'AWS EC2'
  | 'AWS RDS'
  | 'AWS SQS'
  | 'Ant Design'
  | 'AWS SNS'
  | 'AWS ElastiCache'
  | 'Elasticsearch'
  | 'Selenium'
  | 'Netdata'
  | 'Caddy'
  | "Let's Encrypt"
  | 'Cloudflare Zero Trust'
  | 'Digital Ocean'
  | 'NextJS'
  | 'Stylelint'
  | 'MinIO'
  | 'HTMX'
  | 'djlint'
  | 'xml'
  | 'Leaflet'
  | 'Hyperscript'
  | 'OAuth2'
  | 'Office 365 API'
  | 'Bootstrap'
  | 'Mantine UI'
  | 'Trello'
  | 'Telegram API'
  | 'Git'
  | 'GitHub'
  | 'DBeaver'
  | 'VS Code'
  | 'NPM'
  | 'Yarn'
  | 'Poetry'
  | 'Pyenv'
  | 'Hoppscotch'
  | 'NVM'
  | 'Warp'
  | 'Figma'
  | 'MacOS'
  | 'Obsidian';

type Skill = {
  icon?: SkillIcon;
  label: SkillLabel;
  adopted?: Date;
};

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
];

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
];

export const planeksSkills: Skill[] = [
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

export const tools: Skill[] = [
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

export type Domain =
  | 'Healthcare'
  | 'Fintech'
  | 'E-commerce'
  | 'Automotive'
  | 'Manufacturing'
  | 'Logistics'
  | 'Telecom'
  | 'Real Estate';
export const domains: Domain[] = [
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
  {
    name: 'Acpv client',
    description:
      'Custom client for ACPV workplaces (specifically for electronic wire shrinking) that integrates key features such as the reimplementation of an existing login system from another production environment, utilizing pre-existing users and permissions. The system performs real-time checks on each element’s status to ensure that only completed and non-faulty parts are processed. Additionally, it updates the production system’s status once the process is finished, ensuring seamless workflow and accuracy in the production line.',
    domain: 'Manufacturing',
    technologies: [
      { label: 'Django', icon: 'django' },
      { label: 'MySQL', icon: 'mysql' },
      { label: 'Electron JS', icon: 'electron' },
    ],
    start: new Date('2020-02-02'),
    end: new Date('2021-03-31'),
  },
  {
    name: 'SysAid Reporter',
    description:
      'Notification system for the SysAid ticketing system, which was missing in the current version, also to create scheduled reports, and inject extra metadata to notifications (location of workplace that submitted incident by Material request manager API ) As notification channel Telegram API was used',
    domain: 'Telecom',
    technologies: [
      { label: 'Django', icon: 'django' },
      { label: 'MySQL', icon: 'mysql' },
      { label: 'Celery', icon: 'celery' },
      { label: 'Telegram API' },
    ],
    start: new Date('2020-09-02'),
    end: new Date('2021-08-30'),
  },
  {
    name: 'Stock Tracking',
    description:
      'This project enables the planning department to monitor stocks of semi-finished goods and other components, allowing them to set quantity thresholds for alerts to be sent to the relevant personnel. It also provides insights into the consumption history of components. Data is sourced from the external legacy ERP system AS400.',
    domain: 'Logistics',
    technologies: [
      { label: 'Django', icon: 'django' },
      { label: 'MySQL', icon: 'mysql' },
      { label: 'Celery', icon: 'celery' },
      { label: 'Telegram API' },
    ],
    start: new Date('2020-09-02'),
    end: new Date('2022-05-30'),
  },
  {
    name: 'Production API',
    description:
      'This project serves as a client for multiple databases (Microsoft SQL, IBM db2, Proprietary in memory storage on ERP systems). It allows other projects to use connections for these sources as API, and developers to create custom queries, and set caching for endpoints. It have site-level authorization with an API token.',
    technologies: [
      { label: 'Django', icon: 'django' },
      { label: 'MySQL', icon: 'mysql' },
      { label: 'Celery', icon: 'celery' },
    ],
    domain: 'Manufacturing',
    start: new Date('2021-03-02'),
    end: new Date('2021-10-30'),
  },
  {
    name: 'Blocked Assemblies Checker',
    description:
      'Tool for the logistic department designed to be used on mobile handheld devices Zebra EC30 to check for blocked assembly before sending it to conveyor line, to eliminate wasted time for 40+ on conveyor workplaces',
    technologies: [
      { label: 'React', icon: 'react' },
      { label: 'Material UI', icon: 'mui' },
    ],
    domain: 'Logistics',
    start: new Date('2021-04-01'),
    end: new Date('2021-04-30'),
  },
  {
    name: 'Workplace Instructions Manager',
    description:
      'The Workplace Instruction Manager is a system that delivers contextual assembly instructions tailored to the specific product being assembled at a given workplace. It integrates seamlessly with proprietary production systems to ensure accurate, real-time guidance. Additionally, it features an Electron-based client, enabling access to local PC resources for tasks such as label printing, enhancing the overall efficiency of the assembly process.',
    domain: 'Manufacturing',
    technologies: [
      { label: 'Django', icon: 'django' },
      { label: 'DRF', icon: 'django' },
      { icon: 'electron', label: 'Electron JS' },
      { label: 'React', icon: 'react' },
      { label: 'Vite' },
      { label: 'React Router' },
      { label: 'Redux' },
      { label: 'Material UI', icon: 'mui' },
      { label: 'MySQL', icon: 'mysql' },
      { label: 'Celery', icon: 'celery' },
    ],
    start: new Date('2021-05-02'),
    end: new Date('2021-09-30'),
  },
  {
    name: 'Material Requests Manager',
    description:
      'The Material Request Manager is a comprehensive system designed to streamline the ordering of materials such as wires, semi-finished goods, and other components directly from the workplace. It also provides a user-friendly API for accessing floor and area plans, ensuring precise workplace locations for various services. This integration significantly reduces the time needed to add materials to workplaces while minimizing labor costs.The system features a client interface that enables workplaces to access material suggestions based on current orders and view their material request history. Meanwhile, the material provider interface displays workplace locations with new material requests, indicating available quantities in production or logistic areas and guiding users on where to find them. Additionally, a planning page allows users to create new workplaces or modify existing ones on the map, update floor area layouts, and ensure optimal material placement for improved workflow efficiency. With these functionalities, the Material Request Manager greatly enhances material management processes, leading to increased productivity and reduced operational costs',
    technologies: [
      { label: 'Django', icon: 'django' },
      { label: 'DRF', icon: 'django' },
      { icon: 'electron', label: 'Electron JS' },
      { label: 'React', icon: 'react' },
      { label: 'i18next' },
      { label: 'Vite' },
      { label: 'React Router' },
      { label: 'Redux' },
      { label: 'Material UI', icon: 'mui' },
      { label: 'MySQL', icon: 'mysql' },
      { label: 'Celery', icon: 'celery' },
    ],
    domain: 'Manufacturing',
    start: new Date('2021-01-01'),
    end: new Date('2022-05-30'),
  },
];

export const coaxProjects: project[] = [
  {
    name: 'Net Worth Tracker',
    technologies: [
      { label: 'Django', icon: 'django' },
      { label: 'DRF', icon: 'django' },
      { icon: 'fastapi', label: 'FastAPI' },
      { icon: 'react', label: 'React' },
      { icon: 'numpy', label: 'NumPy' },
      { icon: 'pandas', label: 'Pandas' },
      { icon: 'amazonec2', label: 'AWS EC2' },
      { icon: 'amazonsqs', label: 'AWS SQS' },
      { icon: 'nginx', label: 'Nginx' },
      { icon: 'redis', label: 'Redis' },
      { icon: 'postgresql', label: 'PostgreSQL' },
    ],
    description:
      'Comprehensive Social & Financial platform that enables users to simulate expenditure and income outcomes via the powerful Monte Carlo algorithm. The platform will seamlessly integrate with Yahoo Finance to access real-time currency pricing and historical data for ticker assets. Moreover, it will offer a range of robust methods for asset analysis such as CAPM, Historical Mean, and Custom models. The backend will be powered by FastAPI for executing complex mathematical calculations and running the Monte Carlo model efficiently, while the frontend will be supported by Django DRF for managing all other aspects including social networking features, saving and versioning of scenarios, and creating customizable templates for users.',
    start: new Date('2022-06-01'),
    end: new Date('2022-12-30'),
  },
  {
    name: 'Mental health/lifestyle platform',
    technologies: [
      { label: 'Django', icon: 'django' },
      { label: 'DRF', icon: 'django' },
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
      { icon: 'nginx', label: 'Nginx' },
      { icon: 'redis', label: 'Redis' },
      { icon: 'postgresql', label: 'PostgreSQL' },
    ],
    description:
      'Revolutionizing personal health and wellness, our groundbreaking platform offers tailored lifestyle solutions to enhance your well-being. Easily connect with medical experts, receive personalized recommendations directly in your calendar, and track your progress effortlessly. Our innovative algorithm showcases your advancements in different areas based on your consistent efforts, motivating you with vibrant achievements along the way.',
    start: new Date('2022-12-31'),
    end: new Date('2023-11-30'),
  },
  {
    name: 'Antique Seller CRM/Shop',
    description:
      'One of the leading antique marketplaces in the UK, renowned for its user-friendly search and filtering tools, exceptional flexibility, and cutting-edge features tailored for sellers, accompanied by outstanding SEO performance.',
    technologies: [
      { label: 'Django', icon: 'django' },
      { label: 'DRF', icon: 'django' },
      { icon: 'twilio', label: 'Twilio' },
      { icon: 'stripe', label: 'Stripe' },
      { icon: 'paypal', label: 'PayPal' },
      { icon: 'algolia', label: 'Algolia' },
      { icon: 'facebook', label: 'Facebook API' },
      { icon: 'instagram', label: 'Instagram API' },
      { icon: 'pinterest', label: 'Pinterest API' },
      { label: 'Google Merchant API' },
      { icon: 'sentry', label: 'Sentry' },
      { icon: 'redis', label: 'Redis' },
      { icon: 'postgresql', label: 'PostgreSQL' },
      { icon: 'sentry', label: 'Sentry' },
      { icon: 'react', label: 'React' },
      { icon: 'mui', label: 'Material UI' },
      { icon: 'amazonec2', label: 'AWS EC2' },
      { icon: 'amazonsqs', label: 'AWS SQS' },
      { icon: 'nginx', label: 'Nginx' },
      { icon: 'redis', label: 'Redis' },
      { icon: 'postgresql', label: 'PostgreSQL' },
    ],
    start: new Date('2022-12-31'),
    end: new Date('2023-11-30'),
  },
  {
    name: 'Github repo analyzer',
    description:
      'The GitHub Repo Analyzer is an internal service built with FastAPI and the GitHub API SDK, designed to provide enhanced statistics for each repository and user. It integrates seamlessly with JIRA and TEMPO, offering comprehensive insights into project progress by combining repository data with task tracking and time management metrics. This integration allows for more informed decision-making and a clearer view of development progress across teams and projects.',
    technologies: [
      { icon: 'fastapi', label: 'FastAPI' },
      { icon: 'github', label: 'Github API' },
      { icon: 'jira', label: 'Jira API' },
      { label: 'Tempo API' },
      { icon: 'nginx', label: 'Nginx' },
      { icon: 'redis', label: 'Redis' },
      { icon: 'postgresql', label: 'PostgreSQL' },
    ],
    start: new Date('2023-09-31'),
    end: new Date('2023-11-30'),
  },
];

export const planeksProjects: project[] = [
  {
    name: 'Warehouse access control system',
    domain: 'Logistics',
    technologies: [
      { label: 'Django', icon: 'django' },
      { label: 'DRF', icon: 'django' },
      { icon: 'react', label: 'React' },
      { icon: 'redux', label: 'Redux' },
      { icon: 'mantine', label: 'Mantine UI' },
      { label: 'i18next' },
      { icon: 'digitalocean', label: 'Digital Ocean' },
      { icon: 'caddy', label: 'Caddy' },
      { icon: 'redis', label: 'Redis' },
      { icon: 'postgresql', label: 'PostgreSQL' },
    ],
    description:
      'The warehouse gate management system is a browser-based application designed to streamline the entry process for truck drivers. By interfacing with third-party services, it automates key tasks such as license plate recognition, booking reference validation, and driver ID verification. This integration enhances the efficiency and accuracy of the gate entry process, reducing wait times and improving overall operational flow within the warehouse.',
    start: new Date('2024-09-23'),
    end: new Date('2024-11-30'),
  },
  {
    name: 'AI search platform',
    domain: 'Logistics',
    technologies: [
      { label: 'Django', icon: 'django' },
      { label: 'DRF', icon: 'django' },
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
    description:
      "Platform to deliver AI-assisted semantic search to clients based on their data. The client came to us with a prototype mechanism for this search Natural Language Item Search in Infor M3 - YouTube. Working hand in hand with the client's data science department, we took this prototype to a level of fully functional web service, that will streamline the process of delivering search for end users",
    start: new Date('2024-06-27'),
    end: new Date('2024-07-30'),
  },
  {
    name: 'API for drugs and investments',
    domain: 'Healthcare',
    technologies: [
      { icon: 'fastapi', label: 'FastAPI' },
      { icon: 'pydantic', label: 'Pydantic' },
      { icon: 'caddy', label: 'Caddy' },
      { icon: 'redis', label: 'Redis' },
      { icon: 'mongodb', label: 'MongoDB' },
    ],
    description:
      'Gosset AI is a biotech intelligence platform that consolidates information on drugs and companies, providing users with valuable insights into the current landscape of the biotech industry.',
    start: new Date('2024-08-05'),
    end: new Date('2024-09-30'),
  },
  {
    name: 'Customs portal',
    domain: 'Logistics',
    technologies: [
      { label: 'Django', icon: 'django' },
      { icon: 'bootstrap', label: 'Bootstrap' },
      { icon: 'htmx', label: 'HTMX' },
      { icon: 'digitalocean', label: 'Digital Ocean' },
      { icon: 'caddy', label: 'Caddy' },
      { icon: 'redis', label: 'Redis' },
      { icon: 'postgresql', label: 'PostgreSQL' },
    ],
    description:
      'Customs is a portal for clients of a Netherlands logistics company. It provides users with an interactive and fast way to submit customs documents, provide seamless delivery of goods, and freight tracking along the shipment lifecycle. Behind the scenes, we are handling direct integration with the government customs system via XML file transfers. Also as a part of the client ecosystem, we integrated our emailing/reporting to Office365 via API',
    start: new Date('2024-05-01'),
    end: new Date('2024-07-30'),
  },
  {
    name: 'Fulfillment portal',
    domain: 'Logistics',
    technologies: [
      { label: 'Django', icon: 'django' },
      { icon: 'bootstrap', label: 'Bootstrap' },
      { icon: 'htmx', label: 'HTMX' },
      { icon: 'digitalocean', label: 'Digital Ocean' },
      { icon: 'caddy', label: 'Caddy' },
      { icon: 'redis', label: 'Redis' },
      { icon: 'postgresql', label: 'PostgreSQL' },
    ],
    description:
      'Fulfillment is a portal for clients of logistic company. It allows clients to streamline common operations. With fulfillment clients can effortlessly track incoming and outgoing orders, access detailed order information, and receive real-time notifications from the internal ERP system. Plus, our user-friendly interface includes a range of convenient features such as customizable reports and seamless integration with external API (https://frends.com/). We created a dedicated authorization service that enables Single Sign-On (SSO) across all existing portals. So the clients can enjoy a seamless and uninterrupted login experience across all 3 existing portals',
    start: new Date('2024-02-30'),
    end: new Date('2024-05-30'),
  },
  {
    name: 'Insurance picker platform',
    domain: 'Fintech',
    technologies: [
      { label: 'Django', icon: 'django' },
      { icon: 'bootstrap', label: 'Bootstrap' },
      { icon: 'digitalocean', label: 'Digital Ocean' },
      { icon: 'caddy', label: 'Caddy' },
      { icon: 'redis', label: 'Redis' },
      { icon: 'postgresql', label: 'PostgreSQL' },
    ],
    description:
      'Product that allows automating choosing the right insurance type according to the user’s preferences. The application involves the creation and conduct of surveys among potential customers. Platform is simple to use and easy to understand. It allows users to view all the offers of Swiss health insurance companies classified according to those that suit them best in just a few minutes. Users can customize their search to suit their needs, budget and view the pros and cons of each offer for quick and easy comparison.',
    start: new Date('2024-04-01'),
    end: new Date('2024-04-30'),
  },
  {
    name: 'Property listing automation',
    domain: 'Real Estate',
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
    description:
      'The Property Listing Automation tool is a powerful internal tool designed to enhance the analysis of the real estate market in the UK. It leverages a vast amount of data(For example 9 GB table with historical data for calculating KPI) from two of the most popular real estate websites, Zoopla and Rightmove, to provide comprehensive insights and automation capabilities(For example: Finding UK area with the lowest rent price for last 12 month, automatically generate offer price for all listings in this area code, and send offer to each of them)',
    start: new Date('2023-11-31'),
    end: new Date('2024-02-30'),
  },
];
