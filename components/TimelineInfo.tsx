import React from 'react';
import { Timeline, Text, Badge, Group } from '@mantine/core';
import { IconBriefcaseFilled } from '@tabler/icons-react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

export default function TimelineInfo() {
  dayjs.extend(relativeTime);

  const sebnSkills: string[] = [
    'PhP',
    'Laravel',
    'JS',
    'CSS',
    'HTML',
    'DHCP',
    'Active directory',
    'Ngnix',
    'docker',
    'Mysql',
    'Git',
    'Linux',
    'Python',
    'Django',
    'Drf',
    'Celery',
    'React',
    'Redux',
  ];
  const coaxSkills: string[] = [
    'fastapi',
    'mongodb',
    'postgresql',
    'pandas',
    'drf spectacular',
    'mermaid js',
    'figma',
    'numpy',
    'mailjet',
    'facebook api',
    'instagram api',
    'twilio',
    'jira',
    'pre-commit',
    'ruff',
    'aws:s3',
    'aws:lambda',
    'aws:ec2',
    'aws:rds',
    'aws:sqs',
    'elasticsearch',
  ];

  const planeksSkills: string[] = [
    'selenium',
    'caddy',
    'digital ocean',
    'htmx',
    'hyperscript',
    'bootstrap',
    'mantine ui',
    'trello',
  ];
  return (
    <Timeline active={1} bulletSize={24} lineWidth={2}>
      <Timeline.Item
        bullet={<IconBriefcaseFilled size={12} />}
        title={
          <Group>
            <Badge size="xl" variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>
              SEBN
            </Badge>
            Software engineer
          </Group>
        }
      >
        <Text p={2}>Gained skills:</Text>
        <Group gap={2}>
          {sebnSkills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </Group>
        <Group>
          <Text p={2}>Projects done:</Text>
          <Badge size="md">7</Badge>
        </Group>
        <Text size="sm" mt={4}>
          {dayjs().to(dayjs('2020-02-01'))} for{' '}
          {dayjs('2022-06-01').diff(dayjs('2020-02-01'), 'month')} months
        </Text>
      </Timeline.Item>
      <Timeline.Item
        bullet={<IconBriefcaseFilled size={12} />}
        title={
          <Group>
            <Badge size="xl" variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>
              COAX Software
            </Badge>
            Python Developer
          </Group>
        }
      >
        <Text p={2}>Gained skills:</Text>
        <Group gap={2}>
          {coaxSkills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </Group>
        <Group>
          <Text p={2}>Projects done:</Text>
          <Badge size="md">4</Badge>
        </Group>
        <Text size="sm" mt={4}>
          {dayjs().to(dayjs('2022-06-01'), true)} ago for{' '}
          {dayjs('2023-11-01').diff(dayjs('2022-06-01'), 'month')} months
        </Text>
      </Timeline.Item>
      <Timeline.Item
        bullet={<IconBriefcaseFilled size={12} />}
        title={
          <Group>
            <Badge size="xl" variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>
              PLANEKS
            </Badge>
            Fullstack web developer
          </Group>
        }
      >
        <Text p={2}>Gained skills:</Text>
        <Group gap={2}>
          {planeksSkills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </Group>
        <Group>
          <Text p={2}>Projects done:</Text>
          <Badge size="md">6</Badge>
        </Group>
        <Text size="sm" mt={4}>
          {dayjs().to(dayjs('2023-11-01'), true)} ago for{' '}
          {dayjs().diff(dayjs('2023-11-01'), 'month')} months
        </Text>
      </Timeline.Item>
    </Timeline>
  );
}
