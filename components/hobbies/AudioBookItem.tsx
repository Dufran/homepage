import { Anchor, Badge, Card, Group, Progress, Stack, Text } from '@mantine/core'
import { audioBookSeries } from '../vars'

export type AudioBookSeries = {
  name: string
  link: string
  description: string
  total_count: number
  current_count: number
  current_book: string
}

export default function AudioBookItem() {
  return (
    <Stack gap='md'>
      {audioBookSeries.map((series) => {
        const completed = series.current_count >= series.total_count
        const progress = Math.round((series.current_count / series.total_count) * 100)
        return (
          <Card key={series.name} shadow='sm' padding='md' radius='md' withBorder>
            <Group justify='space-between' align='center' mb='xs'>
              <Anchor href={series.link} target='_blank' fw={700} size='lg'>
                {series.name}
              </Anchor>
              <Badge color={completed ? 'teal' : 'blue'} variant='filled'>
                {completed
                  ? `Completed ${series.total_count} books`
                  : `${series.current_count}/${series.total_count}`}
              </Badge>
            </Group>
            <Text size='sm' mb='xs'>
              {series.description}
            </Text>
            <Progress value={progress} color={completed ? 'teal' : 'blue'} size='md' mb='xs' />
            {!completed && (
              <Text size='sm' c='dimmed'>
                Current book: <b>{series.current_book}</b>
              </Text>
            )}
            {completed && (
              <Text size='sm' c='teal'>
                Series fully completed!
              </Text>
            )}
          </Card>
        )
      })}
    </Stack>
  )
}
