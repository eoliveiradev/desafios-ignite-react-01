import { Flex } from "@chakra-ui/react"
import { BackButton } from "../../buttons/BackButton"
import Link from "next/link"

export const Header = () => {
  return (
    <Flex
      as="header"
      justify="space-between"
      align="center"
      width="100%"
      height={{ base: '64px', md: '100px' }}
      px={{ base: '16px', md: '152px' }}
      zIndex={999}
    >
      <Flex flex={1}>
        <BackButton />
      </Flex>
      <Flex flex={1} justify="center">
        <Link href="/">
          <img src='/Logo.svg' />
        </Link>
      </Flex>
      <Flex flex={1}>

      </Flex>
    </Flex>
  )
}