import { Container, Timeline, Title } from '@mantine/core'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { coaxProjects, planeksProjects, sebnProjects } from '../vars'
import TimelineItem from './TimelineItem'

dayjs.extend(relativeTime)

export default function TimelineInfo() {
  return (
    <Container>
      <Title m='sm' ta='center' order={3}>
        Work experience
      </Title>
      <Timeline active={0} bulletSize={24} lineWidth={2}>
        <TimelineItem
          company='PLANEKS'
          jobTitle='Fullstack Developer'
          projectsCount={planeksProjects.length}
          start='2023-11-01'
          description='As a Fullstack Python/JS Developer at Planeks, I lead the development of scalable web applications by leveraging both back-end and front-end technologies. My role involves designing and implementing efficient server-side logic using Python, integrating with various databases, and ensuring a seamless user experience through responsive front-end development.'
        />
        <TimelineItem
          company='COAX Software'
          jobTitle='Middle Python Developer'
          projectsCount={coaxProjects.length}
          start='2022-06-01'
          end='2023-11-01'
          description='As a Middle Python Developer at COAX Software, I focused on backend development using Django Rest Framework and FastAPI, contributing to a variety of projects. I collaborated closely with cross-functional teams to deliver high-quality software solutions, consistently applying best practices in code quality, security, and performance optimization.'
        />
        <TimelineItem
          company='SEBN'
          jobTitle='Software Engineer'
          projectsCount={sebnProjects.length}
          start='2020-02-01'
          end='2022-06-01'
          description='As a Software Engineer at SEBN, I gained deep insights into various production processes, including logistics, planning, and network infrastructure. I identified and investigated bottlenecks, collaborating closely with different company departments to design and implement software solutions that addressed those challenges. My role involved working hand in hand with clients, taking projects from initial concept through to the final product, ensuring that the software delivered met both technical requirements and business needs.'
        />
      </Timeline>
    </Container>
  )
}
