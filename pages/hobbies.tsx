import { Container } from '@mantine/core'
import HobbiesList from '@/components/hobbies/HobbiesList'
import { Header } from '@/components/home/Header'

export default function HobbiesPage() {
  return (
    <Container fluid={true} px='md'>
      <Header />
      <HobbiesList />
    </Container>
  )
}
