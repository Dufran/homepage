import { Container, Title, Image, Group, Tooltip } from '@mantine/core';
import { Header } from '@/components/home/Header';
import SkillMatcher from '@/components/home/SkillMatcher';
import TimelineInfo from '@/components/home/TimelineInfo';
import { UserInfo } from '@/components/home/UserInfo';
import kenobi from '@/public/kenobi.webp';
import classes from './index.module.css';

export default function HomePage() {
  return (
    <Container fluid px="lg">
      <Header />
      <Group justify="center" mt="xl">
        <Tooltip
          inline
          events={{ hover: true, focus: true, touch: true }}
          label={<Image src={kenobi.src} className={classes.kenobi} />}
        >
          <Title order={1} ta="left" mt={20}>
            👋 Hello there!
          </Title>
        </Tooltip>
      </Group>
      <UserInfo />
      <SkillMatcher />
      <TimelineInfo />
    </Container>
  );
}
