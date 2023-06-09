'use client'

import { Image, ImageProps, Stack, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface IHighlight {
  title: string
  icon: ReactNode
}

const IconStyles: ImageProps = {
  width: { base: '32px', md: '85px' },
  height: { base: '32px', md: '85px' },
}

const items: IHighlight[] = [
  {
    title: 'vida noturna',
    icon: (
      <Image src="/highlights/cocktail.svg" alt="Cocktail" {...IconStyles} />
    ),
  },
  {
    title: 'praia',
    icon: <Image src="/highlights/surf.svg" alt="Beach" {...IconStyles} />,
  },
  {
    title: 'moderno',
    icon: (
      <Image src="/highlights/building.svg" alt="Building" {...IconStyles} />
    ),
  },
  {
    title: 'clássico',
    icon: <Image src="/highlights/museum.svg" alt="Museu" {...IconStyles} />,
  },
  {
    title: 'e mais...',
    icon: (
      <Image src="/highlights/earth.svg" alt="Planeta Terra" {...IconStyles} />
    ),
  },
]

export const HightLights = () => {
  return (
    <Stack
      direction="row"
      width="100%"
      spacing="16px"
      justify={{ base: 'center', md: 'space-between' }}
      wrap="wrap"
    >
      {items.map((item) => (
        <Stack
          key={item.title}
          direction="column"
          spacing={{ base: '8px', md: '16px' }}
          align="center"
        >
          {item.icon}
          <Text
            as="h2"
            fontSize={{ base: '1.125rem', md: '1.5rem' }}
            fontWeight="600"
          >
            {item.title}
          </Text>
        </Stack>
      ))}
    </Stack>
  )
}
