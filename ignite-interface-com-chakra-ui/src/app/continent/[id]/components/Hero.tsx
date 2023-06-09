"use client";

import { Flex, Text } from "@chakra-ui/react"

interface HeroProps {
  image_url: string
  title: string
}

export const Hero = (props: HeroProps) => {
  const { image_url, title } = props

  return (
    <Flex
      position="relative"
      align="center"
      justify="center"
      width="100%"
      height={{ base: '150px', md: '500px' }}
      mb={{ base: '36px', md: '80px' }}
      backgroundImage={`url(${image_url})`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Flex
        position={{ md: 'absolute' }}
        bottom={{ md: '59px' }}
        left={{ md: '140px' }}
      >
        <Text
          as="h1"
          color="#F5F8FA"
          fontWeight={600}
          fontSize={{ base: '1.75rem', md: '3rem' }}
        >
          {title}
        </Text>
      </Flex>
    </Flex>
  )
}