import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import { Modal } from '../Modal';
import { Input } from '../Input';
import { IFood } from '../../@types/interfaces';

interface ModalEditFoodProps {
  food: IFood
  isOpen: boolean
  handleUpdateFood(data: IFood): Promise<void>
  toggleIsOpen: () => void
}

export const ModalEditFood = (props: ModalEditFoodProps) => {
  const { food, isOpen, handleUpdateFood, toggleIsOpen } = props

  const formRef = useRef(null)

  const handleSubmit = async (data: IFood) => {
    await handleUpdateFood(data);
    toggleIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={toggleIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={food}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  )
}
