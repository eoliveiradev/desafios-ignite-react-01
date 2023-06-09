'use client'

import { Hero } from '@/app/Home/components/Hero'
import { HightLights } from './components/Highlights'
import { Divider, Text } from '@chakra-ui/react'
import { Slide } from './components/Slide'
import { PageContent, Page } from '@/components/base/page'

const Home = () => {
  return (
    <Page>
      <Hero />
      <PageContent>
        <HightLights />

        <Divider width="90px" color="#47585B" alignSelf="center" />

        <Text
          as="h3"
          fontSize={{ base: '1.25rem', md: '2.25rem' }}
          fontWeight={500}
          align="center"
          color="#47585B"
        >
          Vamos nessa? {<br />}
          Então escolha seu continente
        </Text>

        <Slide />
      </PageContent>
    </Page>
  )
}

export default Home
