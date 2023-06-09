import { Card, Flex, Image, Text } from "@chakra-ui/react"

interface CityCardProps {
  image_url: string
  name: string
  country: {
    flag_url: string
    name: string
  }
}

export const CityCard = (props: CityCardProps) => {
  const { image_url, name, country } = props

  return (
    <Card w="256px" h="280px">
      <Image height={173} width={256} alt={name} src={image_url} />
      <Flex
        p="24px"
      >
        <Flex
          direction="column"
          gap='12px'
          flex={1}
        >
          <Text
            as="h3"
            color="#47585B"
            fontSize="1.25rem"
            fontWeight={600}
          >
            {name}
          </Text>
          <Text
            color="#999999"
            fontSize="1rem"
          >
            {country.name}
          </Text>
        </Flex>

        <Flex
          align="center"
          justify="flex-end"
        >
          <Image
            style={{ borderRadius: "50%" }}
            height={30}
            width={30}
            alt={country.name}
            src={country.flag_url}
          />
        </Flex>
      </Flex>
    </Card>
  )
}