import { Center, Container, MultiSelect, Title } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { IconClearAll } from '@tabler/icons-react'
import { lazy, Suspense, useEffect, useState } from 'react'
import { coaxSkills, planeksSkills, sebnSkills } from '../vars'

const SkillCloud = lazy(() => import('@/components/home/SkillCloud'))

export default function SkillMatcher() {
  const allSkills = sebnSkills.concat(coaxSkills, planeksSkills)
  const [value, setValue] = useState<string[]>([])
  useEffect(() => {
    if (value.length === 2) {
      notifications.show({
        message: 'Perfect match! This skill is right up my alley.',
        title: 'Perfect Match! 🎯✨',
      })
    }
    if (value.length === 3) {
      notifications.show({
        message: `We've got a winner! I'm skilled in exactly what you're looking for.`,
        title: 'Winner Winner, Skill Dinner! 🍽️🏆',
      })
    }
    if (value.length === 4) {
      notifications.show({
        message: 'Bingo! This skill is in my toolkit.',
        title: 'Bingo! 🎉🔧',
      })
    }
    if (value.length === 5) {
      notifications.show({
        message: `Jackpot! I've got this skill covered like a cozy blanket.`,
        title: 'Jackpot! 💰🔧',
      })
    }
    if (value.length === 6) {
      notifications.show({
        message: 'Boom! Skill match like peanut butter and jelly!',
        title: 'Skill Fusion! 🧠⚡',
      })
    }
    if (value.length === 7) {
      notifications.show({
        message: 'Nailed it! This skill and I go together like Batman and Robin.',
        title: 'Match Made in Heaven! 😇💼',
      })
    }
    if (value.length === 8) {
      notifications.show({
        message: `Skill match alert! It's like finding a unicorn, but real.`,
        title: 'Unicorn Alert! 🦄🚀',
      })
    }
    if (value.length > 8) {
      notifications.show({
        message: 'Mic drop! Skill match made in recruiter heaven.',
        title: 'Mic Drop! 🎤💥',
      })
    }
  }, [value])

  return (
    <>
      <Title m='lg' ta='center' order={3}>
        Skills
      </Title>
      <Container mx='auto'>
        <MultiSelect
          label='Search desirable skills'
          mb='md'
          searchable
          rightSection={<IconClearAll onClick={() => setValue([])} />}
          rightSectionPointerEvents='all'
          value={value}
          hidePickedOptions
          description="Search and select skills to see what match it's is"
          onChange={setValue}
          comboboxProps={{ transitionProps: { duration: 200, transition: 'pop' } }}
          data={allSkills.map((skill) => skill.label)}
        />
        <Center>
          <Suspense>
            <SkillCloud />
          </Suspense>
        </Center>
      </Container>
    </>
  )
}
