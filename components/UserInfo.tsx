import { Card, Avatar, Text, Group, Stack, Badge } from '@mantine/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import classes from './UserInfo.module.css';
import img from '../public/profile.jpg';

export function UserInfo() {
  dayjs.extend(relativeTime);
  return (
    <Card radius="md" className={classes.card}>
      <Group justify="space-between" w={800} mx="auto">
        <Stack>
          <Text fw={500} mt="sm">
            Oleksandr Korol
          </Text>
          <Text>Fullstack Developer</Text>
          <Text>Languages: English B2, Ukrainian Native speaker</Text>
          <Group>
            <Text>Commercial experience: </Text>
            <Badge size="lg" circle>
              {dayjs().diff(dayjs('2020-02-01'), 'month')}
            </Badge>
            months or
            <Badge size="lg" circle>
              ~{dayjs().diff(dayjs('2020-02-01'), 'years')}{' '}
            </Badge>
            years
          </Group>
          <Group>
            <Text>Commercial projects: </Text>
            <Badge size="lg" circle>
              14
            </Badge>
          </Group>
          <Text>
            Codding time:{' '}
            <a href="https://wakatime.com/@b235aad2-892a-4e83-b8c3-a6cc36bc4cf4">
              <img
                src="https://wakatime.com/badge/user/b235aad2-892a-4e83-b8c3-a6cc36bc4cf4.svg"
                alt="Total time coded since May 21 2021"
              />
            </a>
          </Text>
        </Stack>
        <Avatar src={img.src} size={100} radius={100} className={classes.avatar} />
      </Group>
      <Text size="md" mt="md">
        I am a Fullstack web developer with substantial commercial industry experience, specializing
        in the development of applications using Django/FastAPI/React. I am recognized for my
        adaptability, honesty, accountability, organizational skills, punctuality, and strong
        problem-solving aptitude. I have successfully designed, developed, and implemented robust
        backend solutions that adhere to project requirements and industry best practices throughout
        my career. Furthermore, I possess a comprehensive understanding of technological frameworks
        and my track record includes consistently delivering high-quality solutions
      </Text>
    </Card>
  );
}
