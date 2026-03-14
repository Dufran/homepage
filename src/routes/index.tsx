import { Container, Group, Image, Title, Tooltip } from '@mantine/core'
import { createFileRoute } from '@tanstack/react-router'
import { Header } from '@/components/home/Header'
import SkillMatcher from '@/components/home/SkillMatcher'
import TimelineInfo from '@/components/home/TimelineInfo'
import { UserInfo } from '@/components/home/UserInfo'
import classes from './index.module.css'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <Container fluid px='lg'>
      <Header />
      <Group justify='center' mt='xl'>
        <Tooltip
          inline
          events={{ focus: true, hover: true, touch: true }}
          label={<Image src='/kenobi.webp' className={classes.kenobi} />}
        >
          <Title order={1} ta='left' mt={20}>
            👋 Hello there!
          </Title>
        </Tooltip>
      </Group>
      <UserInfo />
      <SkillMatcher />
      <TimelineInfo />
    </Container>
  )
}
