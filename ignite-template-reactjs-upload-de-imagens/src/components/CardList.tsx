import { SimpleGrid, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import { Card } from './Card'
import { ModalViewImage } from './Modal/ViewImage'

interface Card {
  title: string
  description: string
  url: string
  ts: number
  id: string
}

interface CardsProps {
  cards: Card[]
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const [imageToModal, setImageToModal] = useState<string | undefined>(undefined)

  const handleViewImage = (url: string) => {
    setImageToModal(url)
  }

  const handleClose = () => setImageToModal(undefined)

  return (
    <>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={{ base: 4, md: 10 }}
      >
        {
          cards.map(card => (
            <Card
              data={card}
              viewImage={() => handleViewImage(card.url)}
              key={card.id}
            />
          ))
        }
      </SimpleGrid>
      <ModalViewImage
        isOpen={Boolean(imageToModal)}
        onClose={handleClose}
        imgUrl={imageToModal}
      />
    </>
  )
}
