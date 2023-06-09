'use client'

import { Flex, Text } from '@chakra-ui/react'

export const Hero = () => {
  return (
    <Flex
      width="100%"
      align="center"
      position="relative"
      height={{ base: '163px', md: '368px' }}
      mb={{ base: '36px', md: '80px' }}
      backgroundImage={`url(/Hero.png)`}
    >
      <Flex
        direction="column"
        position="absolute"
        top={{ base: '28px', md: '80px' }}
        left={{ base: '16px', md: '140px' }}
        gap={{ base: '8px', md: '20px' }}
      >
        <Text
          as="h1"
          fontSize={{ base: '1.25rem', md: '2.25rem' }}
          fontWeight="500"
          color="#F5F8FA"
        >
          5 Continentes, <br />
          infinitas possibilidades.
        </Text>
        <Text
          as="p"
          fontSize={{ base: '0.875rem', md: '1.25rem' }}
          fontWeight="400"
          color="#F5F8FA"
        >
          Chegou a hora de tirar do papel a viagem que você <br />
          sempre sonhou.
        </Text>
      </Flex>
    </Flex>
  )
}
