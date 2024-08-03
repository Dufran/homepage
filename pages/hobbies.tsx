import { Container, Title } from '@mantine/core';
import { Header } from '@/components/home/Header';
import SkillMatcher from '@/components/home/SkillMatcher';
import TimelineInfo from '@/components/home/TimelineInfo';
import { UserInfo } from '@/components/home/UserInfo';

export default function HomePage() {
  return (
    <Container fluid px="md">
      <Header />
      <Title order={1} ta="left" mt={20}>
        Hello, I am a fullstack developer based in Ukraine
      </Title>
      <UserInfo />
      <SkillMatcher />
      <TimelineInfo />
    </Container>
  );
}
