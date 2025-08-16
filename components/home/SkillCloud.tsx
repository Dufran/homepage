import { notifications } from '@mantine/notifications'
import React from 'react'
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from 'react-icon-cloud'
import { coaxSkills, planeksSkills, sebnSkills, tools } from '../vars'

interface Icons {
  icon: string
  simpleIcons: Icons[]
}
const useIcons = () => {
  const [icons, setIcons] = React.useState<Icons>()
  const allSkills = sebnSkills
    .concat(coaxSkills, planeksSkills, tools)
    .filter((skill) => skill.icon)
    .map((skill) => skill.icon)
  // biome-ignore lint/correctness/useExhaustiveDependencies: <fix> This effect only runs once on mount
  React.useEffect(() => {
    if (allSkills) {
      // @ts-expect-error next-line
      fetchSimpleIcons({ slugs: allSkills }).then(setIcons)
    }
  }, [])
  if (icons) {
    return Object.values(icons.simpleIcons).map((icon) =>
      renderSimpleIcon({
        aProps: {
          onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault()
            notifications.show({
              autoClose: 2000,
              message: `${(e.target as HTMLElement).title}.`,
            })
          },
        },
        icon,
        size: 45,
      })
    )
  }
  return null
}
export default function SkillCloud() {
  const icons = useIcons()
  return <Cloud>{icons}</Cloud>
}
