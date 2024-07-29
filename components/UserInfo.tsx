import { Card, Text, Group, Badge, Image, Grid, List, ListItem } from '@mantine/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import classes from './UserInfo.module.css';
import img from '../public/profile.jpg';
import { domains } from './vars';

export function UserInfo() {
  dayjs.extend(relativeTime);
  return (
    <Card radius="md" className={classes.card}>
      <Grid>
        <Grid.Col span={9}>
          <Text fw={500} mt="sm">
            Oleksandr Korol: Fullstack Developer
          </Text>
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
          <Group>
            Domains worked in:
            <List>
              {domains.map((domain) => (
                <ListItem icon key={domain}>
                  <Badge size="md" key={domain}>
                    {domain}
                  </Badge>
                </ListItem>
              ))}
            </List>
          </Group>
          <Text size="md" mt="md">
            I am a Fullstack web developer with substantial commercial industry experience,
            specializing in the development of applications using Django/FastAPI/React. I am
            recognized for my adaptability, honesty, accountability, organizational skills,
            punctuality, and strong problem-solving aptitude. I have successfully designed,
            developed, and implemented robust backend solutions that adhere to project requirements
            and industry best practices throughout my career. Furthermore, I possess a comprehensive
            understanding of technological frameworks and my track record includes consistently
            delivering high-quality solutions
          </Text>
        </Grid.Col>
        <Grid.Col span={3} visibleFrom="xs">
          <Image src={img.src} radius="md" alt="Oleksandr Korol" />
        </Grid.Col>
      </Grid>
    </Card>
  );
}
