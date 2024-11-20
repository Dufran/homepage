import { Container } from '@mantine/core';
import React from 'react';
import { Header } from '@/components/home/Header';
import ProjectList from '@/components/projects/ProjectList';

export default function ProjectsPage() {
  return (
    <Container fluid px="md">
      <Header />
      <ProjectList />
    </Container>
  );
}