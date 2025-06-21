import { List } from '@mantine/core'
import { hobbies } from '../vars'

export default function HobbiesList() {
  return (
    <List>
      {hobbies.map((hobby) => (
        <List.Item
          key={hobby.name}
          icon={<hobby.icon />}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          {hobby.name}
          <List>
            <List.Item>{hobby.description}</List.Item>
          </List>
        </List.Item>
      ))}
    </List>
  )
}
