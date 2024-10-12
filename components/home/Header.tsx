import { Group, useMantineColorScheme, ActionIcon, Anchor, Box } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

export function Header() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme;

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
