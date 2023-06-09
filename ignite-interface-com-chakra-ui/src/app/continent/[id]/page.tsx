"use client";

import { Flex, Stack, Text } from "@chakra-ui/react"
import { PageProps } from "../../../../.next/types/app/page"
import { IContinent } from "@/@types/interfaces";
import { useEffect, useState } from "react";
import { getContinentById } from "@/services/continents";
import { Hero } from "./components/Hero";
import { CityCard } from "@/components/CityCard";
import { Page, PageContent } from "@/components/base/page";

const Continent = ({ params }: PageProps) => {
  const [continent, setContinent] = useState<IContinent | undefined>(undefined)

  const loadContinent = async () => {
    try {
      const continent = await getContinentById(String(params.id))
      setContinent(continent)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    loadContinent()
  }, [])

  return (
    <Page>
      {
        continent && (
          <>
            <Hero
              title={continent.name}
              image_url={continent.image}
            />

            <PageContent>
              <Flex
                direction={{ base: 'column', md: 'row' }}
                gap={{ base: '16px', md: '70px' }}
              >
                <Flex
                  flex="1"
                >
                  <Text
                    fontSize={{ base: '0.875rem', md: '1.5rem' }}
                    color="#47585B"
                  >
                    {continent.description}
                  </Text>
                </Flex>
                <Flex
                  flex="1"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  {
                    [
                      { key: "countries", label: "países" },
                      { key: "languages", label: "línguas" },
                      { key: "cities", label: "cidades +100" }
                    ].map((item) => (
                      <Stack key={item.key} spacing={0}>
                        <Text
                          variant="strong"
                          color="#FFBA08"
                          fontWeight={600}
                          fontSize={{ base: '1.5rem', md: '3rem' }}
                        >
                          {continent[item.key as "countries" | "languages" | "cities"].total}
                        </Text>
                        <Text
                          color="#47585B"
                          fontSize={{ base: '1.125rem', md: '1.5rem' }}
                        >
                          {item.label}
                        </Text>
                      </Stack>
                    ))
                  }
                </Flex>
              </Flex>

              <Flex
                direction="column"
                gap={{ base: '20px', md: '40px' }}
              >
                <Text
                  as="h3"
                  fontSize={{ base: "1.25rem", md: "2.25rem" }}
                  fontWeight={500}
                  color="#47585B"
                >
                  Cidades +100
                </Text>

                <Flex
                  flexWrap="wrap"
                  justifyContent={{ base: 'center', md: 'flex-start' }}
                  gap={{ base: '20px', md: '45px' }}
                >
                  {
                    continent.cities.data.map(city => (
                      <CityCard
                        key={city.name}
                        country={city.country}
                        image_url={city.image_url}
                        name={city.name}
                      />
                    ))
                  }
                </Flex>
              </Flex>
            </PageContent>
          </>
        )
      }
    </Page>
  )
}

export default Continent