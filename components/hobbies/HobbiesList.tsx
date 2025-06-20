import { List } from '@mantine/core'
import React from 'react'
import { hobbies } from '../vars'

export default function HobbiesList() {
  return (
    <div>
      <h2>My Hobbies:</h2>
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
    </div>
  )
}
