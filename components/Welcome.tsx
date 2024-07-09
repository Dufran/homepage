import { Text, Container, Title } from '@mantine/core';
import classes from './Welcome.module.css';
import { UserInfo } from './UserInfo';
import TimelineInfo from './TimelineInfo';
import { Header } from './Header';

export function Welcome() {
  return (
    <>
      <Header />
      <Container px={30}>
        <Title order={1} ta="left" className={classes.title} mt={20}>
          Hello, I am a fullstack developer based in
          <Text
            px={10}
            inherit
            component="span"
            variant="gradient"
            gradient={{ from: 'indigo', to: 'rgba(255, 238, 0, 1)', deg: 0 }}
          >
            Ukraine
          </Text>
        </Title>

        <Title mt={20} order={2}>
          About me
        </Title>
        <UserInfo />
        <Title mb={20} order={2}>
          Software development timeline
        </Title>
        <TimelineInfo />
      </Container>
    </>
  );
}
