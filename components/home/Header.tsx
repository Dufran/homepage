import { Group, useMantineColorScheme, ActionIcon, Tooltip, Anchor, Box } from '@mantine/core';
import {
  Icon,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconReportAnalytics,
  IconSun,
  IconMoonStars,
} from '@tabler/icons-react';

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
    <Tooltip key={link.label} label={`${link.label}`}>
      <ActionIcon key={link.label}>
        <link.icon key={link.label} href={link.url} onClick={() => window.open(link.url)} />
      </ActionIcon>
    </Tooltip>
  ));
  return (
    <Box>
      <Group justify="space-between" p="sm">
        <Group>
          <Anchor component="a" href="/hobbies">
            Hobbies
          </Anchor>
          <Anchor component="a" href="/projects">
            Projects
          </Anchor>
        </Group>
        <Group justify="end">
          {items}
          <ActionIcon
            variant="outline"
            color={dark ? 'yellow' : 'blue'}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
          >
            {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
          </ActionIcon>
        </Group>
      </Group>
    </Box>
  );
}
