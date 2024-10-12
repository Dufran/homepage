import {
  Text,
  Group,
  Badge,
  Grid,
  Card,
  Avatar,
  Stack,
  Tooltip,
  Box,
  List,
  rem,
  NavLink,
} from '@mantine/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {
  IconApi,
  IconBrandReact,
  IconLink,
  IconProgressCheck,
  IconServer,
  IconUsersGroup,
} from '@tabler/icons-react';
import img from '@/public/profile.jpg';
import { coaxProjects, domains, planeksProjects, sebnProjects, SocialLinks } from '../vars';
import classes from './UserInfo.module.css';

dayjs.extend(relativeTime);
export function UserInfo() {
  const items = SocialLinks.map((link) => (
    <NavLink
      key={link.label}
      href={link.url}
      label={link.label}
      leftSection={<link.icon key={link.label} onClick={() => window.open(link.url)} />}
    />
  ));
  return (
    <Grid p="md">
      <Grid.Col span={{ base: 12, sm: 6 }}>
        <Card withBorder padding="xl" radius="md" className={classes.card}>
          <Group>
            <Avatar
              src={img.src}
              size={80}
              radius={80}
              mx="auto"
              mt={-30}
              className={classes.avatar}
            />
            <Stack>
              <Text ta="center" fz="lg" fw={500} mt="sm">
                Oleksandr Korol
              </Text>
              <Text ta="center" fz="sm" c="dimmed">
                Fullstack engineer
              </Text>
            </Stack>
          </Group>
          <Group justify="start">
            <Text className={classes.feature}>Experience:</Text>
            <Tooltip
              events={{ hover: true, focus: true, touch: true }}
              label={`Or ${dayjs().diff(dayjs('2020-02-01'), 'month')} months`}
            >
              <Badge size="md" mr="md">
                {dayjs().diff(dayjs('2020-02-01'), 'years')} years
              </Badge>
            </Tooltip>
          </Group>
          <Group>
            <Text className={classes.feature}>Projects done:</Text>
            <Badge size="md">
              {coaxProjects.length + sebnProjects.length + planeksProjects.length}
            </Badge>
          </Group>

          <Text className={classes.feature}>Languages:</Text>
          <Group justify="start">
            <Badge size="md">English B2 </Badge>
            <Badge size="md">German A2 </Badge>
            <Badge size="md">Ukrainian C2 </Badge>
          </Group>
          <Text p="sm" ta="left" fw={800}>
            Domains worked in:
          </Text>
          <Group gap={4}>
            {domains.map((domain) => (
              <Badge size="md" key={domain}>
                {domain}
              </Badge>
            ))}
          </Group>
          <Card.Section>
            <NavLink
              w="80%"
              p="md"
              m="auto"
              label="Related links"
              childrenOffset={28}
              leftSection={<IconLink size="1rem" stroke={1.5} />}
            >
              {items}
            </NavLink>
          </Card.Section>
        </Card>
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 6 }}>
        <Text className={classes.infoTitle}>Fullstack Developer Django|FastAPI|React</Text>
        <Box className={classes.infoContainer}>
          <Text className={classes.info}>
            Experienced in designing and implementing scalable web applications using modern
            frameworks like Django, FastAPI, and React. Recognized for adaptability, accountability,
            and problem-solving skills, with a proven track record of delivering backend solutions
            that align with project goals and industry best practices.
          </Text>
          <Text className={classes.infoTitle}>Recognized for</Text>
          <List>
            <List.Item p="sm" icon={<IconApi style={{ width: rem(16), height: rem(16) }} />}>
              Backend development, with a focus on performance optimization and security.
            </List.Item>
            <List.Item p="sm" icon={<IconBrandReact style={{ width: rem(16), height: rem(16) }} />}>
              Constructing user-friendly interfaces using React, incorporating modern design. Walk
              the end user shoes and suggest improvements on the spot.
            </List.Item>
            <List.Item p="sm" icon={<IconServer style={{ width: rem(16), height: rem(16) }} />}>
              Deep knowledge of unix OS, deployment, and server management. Also self-hosting
              homelab enthusiast
            </List.Item>
            <List.Item p="sm" icon={<IconUsersGroup style={{ width: rem(16), height: rem(16) }} />}>
              Collaborating with cross-functional teams to deliver high-quality software solutions
            </List.Item>
            <List.Item
              p="sm"
              icon={<IconProgressCheck style={{ width: rem(16), height: rem(16) }} />}
            >
              Organizational skills, with a proven track record of managing project tasks
            </List.Item>
          </List>
        </Box>
      </Grid.Col>
    </Grid>
  );
}
