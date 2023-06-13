import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react'

interface ModalViewImageProps {
  isOpen: boolean
  onClose: () => void
  imgUrl: string
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalBody p="0">
          <Image src={imgUrl} alt="Imagem selecionada" />
        </ModalBody>
        <ModalFooter bgColor="pGray.800">
          <Link href={imgUrl} isExternal fontSize="14px" color="gray.50" mr="auto">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
