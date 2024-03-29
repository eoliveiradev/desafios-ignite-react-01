import { useState } from "react";
import { IFood } from "../../@types/interfaces"
import { api } from '../../services/api'
import { Container } from "./styles";
import { FiEdit3, FiTrash } from 'react-icons/fi'

interface FoodProps {
  food: IFood;
  handleEditFood: (food: IFood) => void;
  handleDelete: (id: number) => void;
}

export const Food = (props: FoodProps) => {
  const { food, handleEditFood, handleDelete } = props

  const [isAvailable, setIsAvailable] = useState(food.available)

  const toggleAvailable = async () => {
    await api.put(`/foods/${food.id}`, {
      ...food,
      available: !isAvailable,
    })

    setIsAvailable(state => !state)
  }

  const setEditingFood = () => {
    handleEditFood(food)
  }

  return (
    <Container available={isAvailable}>
      <header>
        <img src={food.image} alt={food.name} />
      </header>
      <section className="body">
        <h2>{food.name}</h2>
        <p>{food.description}</p>
        <p className="price">
          R$ <b>{food.price}</b>
        </p>
      </section>
      <section className="footer">
        <div className="icon-container">
          <button
            type="button"
            className="icon"
            onClick={setEditingFood}
            data-testid={`edit-food-${food.id}`}
          >
            <FiEdit3 size={20} />
          </button>

          <button
            type="button"
            className="icon"
            onClick={() => handleDelete(food.id as number)}
            data-testid={`remove-food-${food.id}`}
          >
            <FiTrash size={20} />
          </button>
        </div>

        <div className="availability-container">
          <p>{isAvailable ? 'Disponível' : 'Indisponível'}</p>

          <label htmlFor={`available-switch-${food.id}`} className="switch">
            <input
              id={`available-switch-${food.id}`}
              type="checkbox"
              checked={isAvailable}
              onChange={toggleAvailable}
              data-testid={`change-status-food-${food.id}`}
            />
            <span className="slider" />
          </label>
        </div>
      </section>
    </Container>
  )
}
