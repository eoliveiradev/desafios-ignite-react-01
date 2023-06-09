import { ReactNode } from 'react'
import { Container, Content } from './styles'
import { Header } from '@/components/layouts/components/Header'

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
    </Container>
  )
}
