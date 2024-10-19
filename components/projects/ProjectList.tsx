import React from 'react';
import { Card, Group, Text, Badge, Grid, Container, Title, Select } from '@mantine/core';
import dayjs from 'dayjs';
import { coaxProjects, Domain, planeksProjects, sebnProjects } from '../vars';

export default function ProjectList() {
  const allProjects = planeksProjects.concat(coaxProjects, sebnProjects);
  const domains = Array.from(
    new Set(
      allProjects
        .map((project) => project.domain)
        .filter((domain): domain is Domain => domain !== undefined) // Ensuring type safety
    )
  );
  return (
    <Container fluid>
      <Title ta="center" order={3}>
        List of commercial projects
      </Title>
      <Group p="md">
        <Select
          label="Technologies"
          placeholder="Select technology"
          searchable
          clearable
          multiple
        />
        <Select
          label="Domains"
          placeholder="Select domain"
          searchable
          clearable
          multiple
          data={domains}
        />
      </Group>
      <Grid>
        {allProjects.map((project) => (
          <Grid.Col key={project.name} span={{ base: 12, md: 4 }}>
            <Card key={project.name} shadow="sm" padding="lg" radius="md" h="100%" withBorder>
              <Group justify="center" mt="md" mb="xs">
                <Text fw={500}>{project.name}</Text>
                {project.domain ? <Badge key={project.domain}>{project.domain}</Badge> : null}
              </Group>
              <Group justify="center" mt="md" mb="xs">
                <Text ta="center" fw={500}>
                  Timeline:
                </Text>
                <Badge>{dayjs(project.start).format('MM.YYYY')}</Badge>...
                <Badge>{dayjs(project.end).format('MM.YYYY')}</Badge>
              </Group>
              <Text ta="center">Description:</Text>
              <Text>{project.description}</Text>
              <Text ta="center">Technologies:</Text>
              <Group justify="center">
                {project.technologies?.map((skill) =>
                  skill ? <Badge key={skill.label}>{skill.label}</Badge> : null
                )}
              </Group>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
