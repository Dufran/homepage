import dayjs from 'dayjs'
import React from 'react'
import { IconCalendar } from '@tabler/icons-react'
import { Badge, Card, Divider, Group, Stack, Text } from '@mantine/core'

type Technology = { label: string }
type ProjectItemProps = {
  name: string
  domain?: string
  start: string
  end?: string
  description?: string
  technologies?: Technology[]
}

export function ProjectItem({
  name,
  domain,
  start,
  end,
  description,
  technologies = [],
}: ProjectItemProps) {
  return (
    <Card
      shadow="md"
      padding="lg"
      radius="md"
      h="100%"
      withBorder
      style={{ transition: 'box-shadow 0.2s', cursor: 'pointer' }}
      onMouseOver={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.10)'
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.boxShadow = ''
      }}
    >
      <Stack gap="xs">
        <Text fw={700} ta="center" size="lg">
          {name}
        </Text>
        {domain && (
          <Group justify="center">
            <Badge variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} size="md">
              {domain}
            </Badge>
          </Group>
        )}
        <Group justify="center" mt="xs" mb="xs" gap="xs">
          <IconCalendar size={16} />
          <Badge color="blue" variant="filled">
            {dayjs(start).format('MM.YYYY')}
          </Badge>
          <Text>-</Text>
          <Badge color="blue" variant="filled">
            {end ? dayjs(end).format('MM.YYYY') : 'Present'}
          </Badge>
        </Group>
        <Divider my="xs" />
        <Text fw={700} ta="center" size="md">
          Description:
        </Text>
        <Text size="sm" ta="center" lineClamp={5}>
          {description}
        </Text>
        <Divider my="xs" />
        <Text fw={700} ta="center" size="md">
          Technologies:
        </Text>
        <Group gap="xs" justify="center" wrap="wrap">
          {technologies.map(
            (skill) =>
              skill && (
                <Badge key={skill.label} color="blue" variant="filled" size="md">
                  {skill.label}
                </Badge>
              )
          )}
        </Group>
      </Stack>
    </Card>
  )
}
