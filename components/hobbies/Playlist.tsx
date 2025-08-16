import { Box, Card, Text } from '@mantine/core'

export default function Playlist() {
  return (
    <Box maw={700} mx='auto' my='lg'>
      <Card shadow='md' padding='md' radius='md'>
        <Text ta='center' fw={700} size='lg' mb='sm'>
          My Coding Playlist
        </Text>
        <Box
          style={{
            background: '#000',
            borderRadius: 8,
            height: 0,
            overflow: 'hidden',
            paddingBottom: '56.25%',
            position: 'relative',
          }}
        >
          <iframe
            src='https://www.youtube.com/embed/videoseries?list=PLghlXbMeN9Km6qWlHa6M3G4Bwr00Pr9V4'
            title='YouTube Playlist'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            style={{
              border: 0,
              borderRadius: 8,
              height: '100%',
              left: 0,
              position: 'absolute',
              top: 0,
              width: '100%',
            }}
          />
        </Box>
      </Card>
    </Box>
  )
}
