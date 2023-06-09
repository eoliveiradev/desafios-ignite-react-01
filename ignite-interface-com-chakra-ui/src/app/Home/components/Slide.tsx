'use client'

import { IContinent } from '@/@types/interfaces'
import { Slider } from '@/components/Slider'
import { getContinents } from '@/services/continents'
import { Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface SlidePageProps {
  continent: IContinent
}

const SlidePage = (props: SlidePageProps) => {
  const { continent } = props

  return (
    <Link href={`/continent/${continent.id}`}>
      <Flex
        key={continent.id}
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="center"
        backgroundImage={`url(${continent.image})`}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Flex direction="column" alignItems="center" gap="16px">
          <Text
            fontSize={{ base: '1.5rem', md: '3rem' }}
            fontWeight={700}
            color="#F5F8FA"
          >
            {continent.name}
          </Text>
          <Text
            fontSize={{ base: '0.875', md: '1.5rem' }}
            fontWeight={700}
            color="#F5F8FA"
          >
            {continent.short_description}
          </Text>
        </Flex>
      </Flex>
    </Link>
  )
}

export const Slide = () => {
  const [continents, setContinents] = useState<IContinent[]>([])

  const loadContinents = async () => {
    try {
      const continents = await getContinents()

      console.log(continents)

      setContinents(continents)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    loadContinents()
  }, [])

  return (
    <Slider height={'450px'} width="100%">
      {continents.map((continent, index) => (
        <SlidePage continent={continent} key={index} />
      ))}
    </Slider>
  )
}
