import { ActionIcon, Anchor, Box, Group, useMantineColorScheme } from '@mantine/core'
import { IconMoonStars, IconSun } from '@tabler/icons-react'
import { usePathname } from 'next/navigation'
import classes from './Header.module.css'

const links = [
  { link: '/', label: 'Home' },
  { link: '/projects', label: 'Projects' },
  { link: '/hobbies', label: 'Hobbies' },
]

export function Header() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme
  const location = usePathname()
  const items = links.map((link) => (
    <Anchor
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={link.link === location || undefined}
    >
      {link.label}
    </Anchor>
  ))
  return (
    <Box>
      <Group justify="space-between" p="sm">
        <Group gap={5}>{items}</Group>
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
  )
}
