import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import { Modal } from '../Modal';
import { Input } from '../Input';
import { IFood } from '../../@types/interfaces';

interface ModalAddFoodProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  handleAddFood: (data: IFood) => Promise<void>
}

export const ModalAddFood = (props: ModalAddFoodProps) => {
  const { isOpen, setIsOpen, handleAddFood } = props

  const formRef = useRef(null)

  const handleSubmit = async (data: IFood) => {
    await handleAddFood(data)
    setIsOpen(false)
  }

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  )
}
