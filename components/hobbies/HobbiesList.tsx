import { Grid, Tabs, Text } from '@mantine/core'
import { hobbies } from '@/components/vars'
import AudioBookItem from './AudioBookItem'
import Playlist from './Playlist'

export default function HobbiesList() {
  return (
    <Tabs defaultValue={hobbies[0]?.name}>
      <Tabs.List>
        {hobbies.map((hobby) => (
          <Tabs.Tab key={hobby.name} value={hobby.name} leftSection={<hobby.icon />}>
            {hobby.name}
          </Tabs.Tab>
        ))}
      </Tabs.List>
      {hobbies.map((hobby) => (
        <Tabs.Panel key={hobby.name} value={hobby.name}>
          {hobby.name === 'Audiobooks' ? (
            <div>
              <Text ta='center'>{hobby.description}</Text>
              <Grid p='sm'>
                <AudioBookItem />
              </Grid>
            </div>
          ) : hobby.name === 'Music Listening' ? (
            <div>
              <Text ta='center'>{hobby.description}</Text>
              <Playlist />
            </div>
          ) : (
            <Text ta='center'>{hobby.description}</Text>
          )}
        </Tabs.Panel>
      ))}
    </Tabs>
  )
}
