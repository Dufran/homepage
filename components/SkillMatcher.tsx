import { Box, Grid, MultiSelect, Title } from '@mantine/core';
import { coaxSkills, planeksSkills, sebnSkills } from './vars';
import SkillCloud from '@/components/SkillCloud';

export default function SkillMatcher() {
  const allSkills = sebnSkills.concat(coaxSkills, planeksSkills);
  return (
    <Box>
      <Grid>
        <Grid.Col span={4}>
          <MultiSelect
            mb="md"
            label={<Title>Search desirable skill</Title>}
            searchable
            data={allSkills.map((skill) => skill.label)}
          />
        </Grid.Col>
        <Grid.Col span={8}>
          <SkillCloud />
        </Grid.Col>
      </Grid>
    </Box>
  );
}
