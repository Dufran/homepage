import { Badge, Grid, Group, Text, Timeline } from '@mantine/core'
import { IconBriefcaseFilled } from '@tabler/icons-react'
import dayjs from 'dayjs'
import type React from 'react'

type ExperienceTimelineItemProps = {
  company: string
  badgeGradient?: { from: string; to: string; deg?: number }
  jobTitle: string
  projectsCount: number
  start: string
  end?: string
  description: React.ReactNode
  icon?: React.ReactNode
}

export default function ExperienceTimelineItem({
  company,
  badgeGradient = { from: 'blue', to: 'cyan', deg: 90 },
  jobTitle,
  projectsCount,
  start,
  end,
  description,
  icon = <IconBriefcaseFilled size={12} />,
}: ExperienceTimelineItemProps) {
  const startDate = dayjs(start)
  const endDate = end ? dayjs(end) : dayjs()
  const months = endDate.diff(startDate, 'month')
  const ago = dayjs().to(startDate, true)

  return (
    <Timeline.Item
      bullet={icon}
      lineVariant='dashed'
      title={
        <Group>
          <Badge size='xl' variant='gradient' gradient={badgeGradient}>
            {company}
          </Badge>
        </Group>
      }
    >
      <Grid>
        <Grid.Col span={{ base: 12, md: 3 }}>
          <Text fw={700}>{jobTitle}</Text>
          <Group>
            <Text p={2}>Projects done:</Text>
            <Badge size='md'>{projectsCount}</Badge>
          </Group>
          <Text size='sm' mt={4}>
            {ago} ago for {months} months
          </Text>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 9 }}>
          <Text size='md'>{description}</Text>
        </Grid.Col>
      </Grid>
    </Timeline.Item>
  )
}
