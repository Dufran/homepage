import { MultiSelect, Title } from '@mantine/core';
import React from 'react';
import { coaxSkills, planeksSkills, sebnSkills } from './vars';

export default function SkillMatcher() {
  return (
    <MultiSelect
      mb="md"
      label={<Title>Search desirable skill</Title>}
      searchable
      data={coaxSkills.concat(sebnSkills, planeksSkills)}
    />
  );
}
