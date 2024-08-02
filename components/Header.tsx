import { Group, Button, useMantineColorScheme, ActionIcon } from '@mantine/core';
import {
  Icon,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconReportAnalytics,
  IconSun,
  IconMoonStars,
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
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme;
  const items = SocialLinks.map((link) => (
    <Button component="a" href={link.url} leftSection={<link.icon />} size="xs" key={link.label}>
      {link.label}
    </Button>
  ));
  return (
    <div className={classes.inner}>
      <Group className={classes.links}>
        <ActionIcon
          variant="outline"
          color={dark ? 'yellow' : 'blue'}
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
        >
          {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
        </ActionIcon>
      </Group>
      <Group gap="xs" justify="flex-end">
        {items}
      </Group>
    </div>
  );
}
