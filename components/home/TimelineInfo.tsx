import React from 'react';
import { Timeline, Title, Text, Badge, Group, Box, Grid } from '@mantine/core';
import { IconBriefcaseFilled } from '@tabler/icons-react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { coaxProjects, planeksProjects, sebnProjects } from '../vars';

export default function TimelineInfo() {
  dayjs.extend(relativeTime);

  return (
    <Box>
      <Title m="lg" ta="center" order={3}>
        Work experience
      </Title>
      <Timeline bulletSize={24} lineWidth={2}>
        <Timeline.Item
          bullet={<IconBriefcaseFilled size={12} />}
          title={
            <Group>
              <Badge size="xl" variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>
                PLANEKS
              </Badge>
            </Group>
          }
        >
          <Grid>
            <Grid.Col span={{ base: 12, md: 2 }}>
              <Text fw={700}>Fullstack Developer</Text>
              <Group>
                <Text p={2}>Projects done:</Text>
                <Badge size="md">{planeksProjects.length}</Badge>
              </Group>
              <Text size="sm" mt={4}>
                {dayjs().to(dayjs('2023-11-01'), true)} ago for{' '}
                {dayjs().diff(dayjs('2023-11-01'), 'month')} months
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 10 }}>
              <Text size="sm">
                As a Fullstack Python Developer at Planeks, I lead the development of scalable web
                applications by leveraging both back-end and front-end technologies. My role
                involves designing and implementing efficient server-side logic using Python,
                integrating with various databases, and ensuring a seamless user experience through
                responsive front-end development.
              </Text>
            </Grid.Col>
          </Grid>
        </Timeline.Item>
        <Timeline.Item
          bullet={<IconBriefcaseFilled size={12} />}
          title={
            <Group>
              <Badge size="xl" variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>
                COAX Software
              </Badge>
            </Group>
          }
        >
          <Grid>
            <Grid.Col span={{ base: 12, md: 2 }}>
              <Text fw={700}>Middle Python Developer</Text>
              <Group>
                <Text p={2}>Projects done:</Text>
                <Badge size="md">{coaxProjects.length}</Badge>
              </Group>
              <Text size="sm" mt={4}>
                {dayjs().to(dayjs('2022-06-01'), true)} ago for{' '}
                {dayjs('2023-11-01').diff(dayjs('2022-06-01'), 'month')} months
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 10 }}>
              <Text>
                As a Middle Python Developer at COAX Software, I focused on backend development
                using Django Rest Framework and FastAPI, contributing to a variety of projects. I
                collaborated closely with cross-functional teams to deliver high-quality software
                solutions, consistently applying best practices in code quality, security, and
                performance optimization.
              </Text>
            </Grid.Col>
          </Grid>
        </Timeline.Item>
        <Timeline.Item
          bullet={<IconBriefcaseFilled size={12} />}
          title={
            <Group>
              <Badge size="xl" variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>
                SEBN
              </Badge>
            </Group>
          }
        >
          <Grid>
            <Grid.Col span={{ base: 12, md: 2 }}>
              <Text fw={700}>Software engineer</Text>
              <Group>
                <Text p={2}>Projects done:</Text>
                <Badge size="md">{sebnProjects.length}</Badge>
              </Group>
              <Text size="sm" mt={4}>
                {dayjs().to(dayjs('2020-02-01'))} for{' '}
                {dayjs('2022-06-01').diff(dayjs('2020-02-01'), 'month')} months
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 10 }}>
              <Text>
                As a Software Engineer at SEBN, I gained deep insights into various production
                processes, including logistics, planning, and network infrastructure. I identified
                and investigated bottlenecks, collaborating closely with different company
                departments to design and implement software solutions that addressed those
                challenges. My role involved working hand in hand with clients, taking projects from
                initial concept through to the final product, ensuring that the software delivered
                met both technical requirements and business needs.
              </Text>
            </Grid.Col>
          </Grid>
        </Timeline.Item>
      </Timeline>
    </Box>
  );
}
