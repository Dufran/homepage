import { Grid, MultiSelect, Center, Title } from '@mantine/core';
import dynamic from 'next/dynamic';
import { coaxSkills, planeksSkills, sebnSkills } from './vars';

const SkillCloud = dynamic(() => import('@/components/SkillCloud'), { ssr: false });
export default function SkillMatcher() {
  const allSkills = sebnSkills.concat(coaxSkills, planeksSkills);
  return (
    <>
      <Title m="lg" ta="center" order={3}>
        Skills
      </Title>
      <Grid p="sm">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Center>
            <MultiSelect
              label="Search desirable skills"
              searchable
              data={allSkills.map((skill) => skill.label)}
            />
          </Center>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <SkillCloud />
        </Grid.Col>
      </Grid>
    </>
  );
}
