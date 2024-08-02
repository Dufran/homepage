import { Container, Title } from '@mantine/core';
import classes from './Welcome.module.css';
import { UserInfo } from './UserInfo';
import TimelineInfo from './TimelineInfo';
import { Header } from './Header';
import SkillMatcher from './SkillMatcher';

export function Welcome() {
  return (
    <Container fluid px="md">
      <Header />
      <Title order={1} ta="left" className={classes.title} mt={20}>
        Hello, I am a fullstack developer based in Ukraine
      </Title>
      <UserInfo />
      <SkillMatcher />
      <TimelineInfo />
    </Container>
  );
}
