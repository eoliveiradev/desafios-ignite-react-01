'use client'

import { ContextProps } from '@/@types/interfaces'
import { lightTheme } from '@/themes/light'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider as ChakraUIProvider } from '@chakra-ui/react'

export const ChakraProvider = ({ children }: ContextProps) => {
  return (
    <CacheProvider>
      <ChakraUIProvider theme={lightTheme}>{children}</ChakraUIProvider>
    </CacheProvider>
  )
}
