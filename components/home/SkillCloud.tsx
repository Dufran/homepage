import React from 'react';
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from 'react-icon-cloud';
import { notifications } from '@mantine/notifications';
import { coaxSkills, planeksSkills, sebnSkills, tools } from '../vars';

interface Icons {
  icon: string;
  simpleIcons: any;
}
const useIcons = () => {
  const [icons, setIcons] = React.useState<Icons>();
  const allSkills = sebnSkills
    .concat(coaxSkills, planeksSkills, tools)
    .filter((skill) => skill.icon)
    .map((skill) => skill.icon);
  React.useEffect(() => {
    if (allSkills) {
      // @ts-ignore next-line
      fetchSimpleIcons({ slugs: allSkills }).then(setIcons);
    }
  }, []);
  if (icons) {
    return Object.values(icons.simpleIcons).map((icon) =>
      renderSimpleIcon({
        icon,
        size: 45,
        aProps: {
          onClick: (e: any) => {
            e.preventDefault();
            notifications.show({
              message: `${e.target.title}.`,
              autoClose: 2000,
            });
          },
        },
      })
    );
  }
  return null;
};
export default function SkillCloud() {
  const icons = useIcons();
  return (
    <Cloud>
      {icons}
      <></>
    </Cloud>
  );
}
