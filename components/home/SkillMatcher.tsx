import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { IconClearAll } from '@tabler/icons-react';
import { Center, Container, MultiSelect, Title } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { coaxSkills, planeksSkills, sebnSkills } from '../vars';

const SkillCloud = dynamic(() => import('@/components/home/SkillCloud'), { ssr: false });
export default function SkillMatcher() {
  const allSkills = sebnSkills.concat(coaxSkills, planeksSkills);
  const [value, setValue] = useState<string[]>([]);
  useEffect(() => {
    if (value.length === 2) {
      notifications.show({
        title: 'Perfect Match! 🎯✨',
        message: 'Perfect match! This skill is right up my alley.',
      });
    }
    if (value.length === 3) {
      notifications.show({
        title: 'Winner Winner, Skill Dinner! 🍽️🏆',
        message: 'We’ve got a winner! I’m skilled in exactly what you’re looking for.',
      });
    }
    if (value.length === 4) {
      notifications.show({
        title: 'Bingo! 🎉🔧',
        message: 'Bingo! This skill is in my toolkit.',
      });
    }
    if (value.length === 5) {
      notifications.show({
        title: 'Jackpot! 💰🔧',
        message: 'Jackpot! I’ve got this skill covered like a cozy blanket.',
      });
    }
    if (value.length === 6) {
      notifications.show({
        title: 'Skill Fusion! 🧠⚡',
        message: 'Boom! Skill match like peanut butter and jelly!',
      });
    }
    if (value.length === 7) {
      notifications.show({
        title: 'Match Made in Heaven! 😇💼',
        message: 'Nailed it! This skill and I go together like Batman and Robin.',
      });
    }
    if (value.length === 8) {
      notifications.show({
        title: 'Unicorn Alert! 🦄🚀',
        message: 'Skill match alert! It’s like finding a unicorn, but real.',
      });
    }
    if (value.length > 8) {
      notifications.show({
        title: 'Mic Drop! 🎤💥',
        message: 'Mic drop! Skill match made in recruiter heaven.',
      });
    }
  }, [value]);

  return (
    <>
      <Title m="lg" ta="center" order={3}>
        Skills
      </Title>
      <Container mx="auto">
        <MultiSelect
          label="Search desirable skills"
          mb="md"
          searchable
          rightSection={<IconClearAll onClick={() => setValue([])} />}
          rightSectionPointerEvents="all"
          value={value}
          hidePickedOptions
          description="Search and select skills to see what match it's is"
          onChange={setValue}
          comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
          data={allSkills.map((skill) => skill.label)}
        />
        <Center>
          <SkillCloud />
        </Center>
      </Container>
    </>
  );
}
