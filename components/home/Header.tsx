import { ActionIcon, Box, Button, Group, useMantineColorScheme } from '@mantine/core'
import { IconMoonStars, IconSun } from '@tabler/icons-react'
import { Link, useRouterState } from '@tanstack/react-router'

const links = [
  { label: 'Home', link: '/' as const },
  { label: 'Projects', link: '/projects' as const },
  { label: 'Hobbies', link: '/hobbies' as const },
]

export function Header() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const items = links.map((link) => (
    <Button
      p='xs'
      component={Link}
      key={link.label}
      to={link.link}
      data-active={link.link === pathname || undefined}
    >
      {link.label}
    </Button>
  ))
  return (
    <Box>
      <Group justify='space-between' p='sm'>
        <Group gap={5}>{items}</Group>
        <Group justify='end'>
          <ActionIcon
            variant='outline'
            color={dark ? 'yellow' : 'blue'}
            onClick={() => toggleColorScheme()}
            title='Toggle color scheme'
          >
            {dark ? <IconSun size='1.1rem' /> : <IconMoonStars size='1.1rem' />}
          </ActionIcon>
        </Group>
      </Group>
    </Box>
  )
}
