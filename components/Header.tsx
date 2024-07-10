import { Group, Button } from '@mantine/core';
import {
  Icon,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconReportAnalytics,
} from '@tabler/icons-react';
import classes from './Header.module.css';

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
    url: 'korol.oleksandr.work@gmail.com',
  },
];
export function Header() {
  const items = SocialLinks.map((link) => (
    <Button component="a" href={link.url} leftSection={<link.icon />} size="xs" key={link.label}>
      {link.label}
    </Button>
  ));
  return (
    <div className={classes.inner}>
      <Group className={classes.links}></Group>
      <Group gap="xs" justify="flex-end">
        {items}
      </Group>
    </div>
  );
}
