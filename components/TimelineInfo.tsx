import React from 'react';
import { Timeline, Text, Badge, Group } from '@mantine/core';
import { IconBriefcaseFilled } from '@tabler/icons-react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

export default function TimelineInfo() {
  dayjs.extend(relativeTime);

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
        <Text c="dimmed" size="sm">
          Improved various processes in car manufacturing company.
          <br /> Created robust and scalable solutions to cover business needs.
        </Text>
        <Text size="xs" mt={4}>
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
        <Text c="dimmed" size="sm"></Text>
        <Text size="xs" mt={4}>
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
        <Text c="dimmed" size="sm"></Text>
        <Text size="xs" mt={4}>
          {dayjs().to(dayjs('2023-11-01'), true)} ago for{' '}
          {dayjs().diff(dayjs('2023-11-01'), 'month')} months
        </Text>
      </Timeline.Item>
    </Timeline>
  );
}
