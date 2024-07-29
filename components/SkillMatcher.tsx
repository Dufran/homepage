import { MultiSelect, Title } from '@mantine/core';
import { coaxSkills, planeksSkills, sebnSkills } from './vars';

export default function SkillMatcher() {
  const allSkills = sebnSkills.concat(coaxSkills, planeksSkills);
  return (
    <MultiSelect
      mb="md"
      label={<Title>Search desirable skill</Title>}
      searchable
      data={allSkills.map((skill) => skill.label)}
    />
  );
}
