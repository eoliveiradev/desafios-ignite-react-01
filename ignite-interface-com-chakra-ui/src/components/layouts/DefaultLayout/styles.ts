import { styled } from '@chakra-ui/react'

export const Container = styled('div', {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    width: '100%',

    padding: '0 0 40px 0',
  },
})

export const Content = styled('div', {
  baseStyle: {
    width: '100%',
    maxWidth: '1440px',
    minHeight: '100vh',
  },
})
