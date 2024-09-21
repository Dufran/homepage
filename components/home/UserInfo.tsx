import { Text, Group, Badge, Image, Grid } from '@mantine/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import img from '@/public/profile.jpg';
import { coaxProjects, domains, planeksProjects, sebnProjects } from '../vars';

dayjs.extend(relativeTime);
export function UserInfo() {
  return (
    <Grid>
      <Grid.Col span={{ base: 12, md: 9 }}>
        <Text p="sm" ta="left" fw={800}>
          Role:
        </Text>
        <Text p="sm" ta="left">
          Fullstack Developer
        </Text>
        <Text p="sm" ta="left" fw={800}>
          Languages:
        </Text>
        <Text p="sm" ta="left">
          English B2, Ukrainian Native speaker
        </Text>
        <Group>
          <Text p="sm" ta="left" fw={800}>
            Experience:
          </Text>
          <span>
            <Badge size="lg" mr="md" circle>
              {dayjs().diff(dayjs('2020-02-01'), 'month')}
            </Badge>
            months
          </span>
          <b>or</b>
          <span>
            <Badge size="lg" mr="md" circle>
              ~{dayjs().diff(dayjs('2020-02-01'), 'years')}{' '}
            </Badge>
            years
          </span>
        </Group>
        <Group>
          <Text p="sm" ta="left" fw={800}>
            Commercial projects:
          </Text>
          <Badge size="lg" circle>
            {coaxProjects.length + sebnProjects.length + planeksProjects.length}
          </Badge>
        </Group>
        <Group justify="left"></Group>
        <Text p="sm" ta="left" fw={800}>
          Domains worked in:
        </Text>
        <Group gap={2}>
          {domains.map((domain) => (
            <Badge size="md" key={domain}>
              {domain}
            </Badge>
          ))}
        </Group>
        <Text p="sm" ta="left" fw={800}>
          Summary
        </Text>
        <Text size="md">
          I am a Fullstack web developer with substantial commercial industry experience,
          specializing in the development of applications using Django/FastAPI/React. I am
          recognized for my adaptability, honesty, accountability, organizational skills,
          punctuality, and strong problem-solving aptitude. I have successfully designed, developed,
          and implemented robust backend solutions that adhere to project requirements and industry
          best practices throughout my career. Furthermore, I possess a comprehensive understanding
          of technological frameworks and my track record includes consistently delivering
          high-quality solutions
        </Text>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 3 }} visibleFrom="xs">
        <Image src={img.src} radius="md" alt="Oleksandr Korol" />
      </Grid.Col>
    </Grid>
  );
}
