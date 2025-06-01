import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {
  IconApi,
  IconBrandReact,
  IconLink,
  IconProgressCheck,
  IconRobot,
  IconServer,
  IconTrendingUp,
  IconUserCheck,
  IconUsersGroup,
} from '@tabler/icons-react';
import {
  Avatar,
  Badge,
  Box,
  Card,
  Grid,
  Group,
  List,
  NavLink,
  rem,
  Stack,
  Text,
  Tooltip,
} from '@mantine/core';
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
        <Card withBorder h="100%" padding="xl" radius="md" className={classes.card}>
          <Group>
            <Avatar src={img.src} size={125} mx="auto" mt={-30} className={classes.avatar} />
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
              w="100%"
              p="md"
              m="auto"
              label="Would You Like To Know More?"
              childrenOffset={28}
              leftSection={<IconLink size="1rem" stroke={1.5} />}
            >
              {items}
            </NavLink>
          </Card.Section>
        </Card>
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 6 }}>
        <Text className={classes.infoTitle}>Fullstack Python/JavaScript Developer</Text>
        <Box className={classes.infoContainer}>
          <Text className={classes.info}>
            Experienced in designing and implementing scalable web applications using modern
            frameworks such as Django, FastAPI, and React. Known for adaptability, accountability,
            and strong problem-solving abilities, with a proven track record of delivering robust
            solutions aligned with project goals and industry best practices. Brings a strong
            product-oriented mindset and thrives in dynamic startup environments, with extensive
            experience building projects from the ground up.
          </Text>
          <Text className={classes.info} pt="xs">
            Driven by time efficiency — if part of a workflow can be automated, I’ll automate it
            using the best available tools. This helps free up time for what I enjoy most: writing
            clean, effective code to solve real business challenges.
          </Text>
          <Text className={classes.infoTitle}>Recognized for</Text>
          <List>
            <List.Item p="sm" icon={<IconApi style={{ width: rem(16), height: rem(16) }} />}>
              Expertise in backend development with a strong focus on performance optimization, unit
              testing, and security
            </List.Item>
            <List.Item p="sm" icon={<IconBrandReact style={{ width: rem(16), height: rem(16) }} />}>
              Building intuitive, user-friendly interfaces with React, always considering the
              end-user experience and suggesting improvements on the spot
            </List.Item>
            <List.Item p="sm" icon={<IconServer style={{ width: rem(16), height: rem(16) }} />}>
              Deep knowledge of Unix-based systems, deployment workflows, and server management —
              also a homelab and self-hosting enthusiast
            </List.Item>
            <List.Item p="sm" icon={<IconUsersGroup style={{ width: rem(16), height: rem(16) }} />}>
              Effective collaboration with cross-functional teams to deliver high-quality software
              solutions
            </List.Item>
            <List.Item
              p="sm"
              icon={<IconProgressCheck style={{ width: rem(16), height: rem(16) }} />}
            >
              Strong organizational skills with a history of managing project tasks efficiently
            </List.Item>
            <List.Item p="sm" icon={<IconTrendingUp style={{ width: rem(16), height: rem(16) }} />}>
              Continuously staying informed about emerging technologies and trends, and proactively
              identifying the best tools and practices to improve productivity and software quality
            </List.Item>
            <List.Item p="sm" icon={<IconUserCheck style={{ width: rem(16), height: rem(16) }} />}>
              A product-first approach: consistently aligning development decisions with business
              goals and end-user needs
            </List.Item>
            <List.Item p="sm" icon={<IconRobot style={{ width: rem(16), height: rem(16) }} />}>
              Time-conscious and automation-focused, reducing manual overhead in favor of spending
              more time solving meaningful business problems with code
            </List.Item>
          </List>
        </Box>
      </Grid.Col>
    </Grid>
  );
}
