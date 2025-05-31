import dayjs from 'dayjs';
import React, { useMemo, useState } from 'react';
import { Container, Grid, Group, MultiSelect, Title } from '@mantine/core';
import { coaxProjects, Domain, planeksProjects, sebnProjects, SkillLabel } from '../vars';
import { ProjectItem } from './ProjectItem';

export default function ProjectList() {
  const allProjects = planeksProjects.concat(coaxProjects, sebnProjects);

  // Unique domains
  const domains = Array.from(
    new Set(
      allProjects
        .map((project) => project.domain)
        .filter((domain): domain is Domain => domain !== undefined)
    )
  );

  // Unique technologies
  const technologies = Array.from(
    new Set(allProjects.flatMap((project) => project.technologies?.map((t) => t.label) ?? []))
  );

  // State for filters
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<SkillLabel[]>([]);

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      // Domain filter
      const domainMatch =
        selectedDomains.length === 0 ||
        (project.domain && selectedDomains.includes(project.domain));
      // Technology filter
      const techLabels = project.technologies?.map((t) => t.label) ?? [];
      const techMatch =
        selectedTechnologies.length === 0 ||
        selectedTechnologies.every((tech) => techLabels.includes(tech));
      return domainMatch && techMatch;
    });
  }, [allProjects, selectedDomains, selectedTechnologies]);
  return (
    <Container fluid>
      <Title ta="center" order={3}>
        List of commercial projects
      </Title>
      <Group p="md">
        <MultiSelect
          label="Technologies"
          placeholder="Select technology"
          searchable
          clearable
          data={technologies}
          value={selectedTechnologies}
          onChange={(value) => setSelectedTechnologies(value as SkillLabel[])}
        />
        <MultiSelect
          label="Domains"
          placeholder="Select domain"
          searchable
          clearable
          data={domains}
          value={selectedDomains}
          onChange={setSelectedDomains}
        />
      </Group>
      <Grid>
        {filteredProjects.map((project) => (
          <Grid.Col key={project.name} span={{ base: 12, md: 4 }}>
            <ProjectItem
              name={project.name}
              domain={project.domain}
              start={dayjs(project.start).format('YYYY-MM-DD')}
              end={dayjs(project.end).format('YYYY-MM-DD')}
              description={project.description}
              technologies={project.technologies}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
