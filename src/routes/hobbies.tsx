import { Container } from '@mantine/core'
import { createFileRoute } from '@tanstack/react-router'
import HobbiesList from '@/components/hobbies/HobbiesList'
import { Header } from '@/components/home/Header'

export const Route = createFileRoute('/hobbies')({
  component: HobbiesPage,
})

function HobbiesPage() {
  return (
    <Container fluid px='md'>
      <Header />
      <HobbiesList />
    </Container>
  )
}
