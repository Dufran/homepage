import { Container } from '@mantine/core'
import { createFileRoute } from '@tanstack/react-router'
import { Header } from '@/components/home/Header'
import ProjectList from '@/components/projects/ProjectList'

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
})

function ProjectsPage() {
  return (
    <Container fluid px='md'>
      <Header />
      <ProjectList />
    </Container>
  )
}
