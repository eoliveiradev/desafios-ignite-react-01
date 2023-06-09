"use client"

import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export const PageContent = ({ children }: { children: ReactNode }) => {
  return (
    <Flex
      px={{ base: '16px', xl: '0' }}
      direction="column"
      width="100%"
      maxWidth="1160px"
      gap={{ base: "36px", md: "80px" }}
    >
      {children}
    </Flex>
  )
}

export const Page = ({ children }: { children: ReactNode }) => {
  return (
    <Flex as="main" direction="column" align="center">
      {children}
    </Flex>
  )
}