import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'

import { localStorageColorSchemeManager, MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { theme } from '../../theme'

const colorSchemeManager = localStorageColorSchemeManager({ key: 'mantine-color-scheme-value' })

export const Route = createRootRoute({
  component: () => (
    <MantineProvider theme={theme} colorSchemeManager={colorSchemeManager}>
      <Notifications />
      <Outlet />
    </MantineProvider>
  ),
})
