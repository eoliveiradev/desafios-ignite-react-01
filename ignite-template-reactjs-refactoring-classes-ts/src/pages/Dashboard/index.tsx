import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { api } from '../../services/api';
import { Food } from '../../components/Food';
import { ModalAddFood } from '../../components/ModalAddFood';
import { ModalEditFood } from '../../components/ModalEditFood';
import { FoodsContainer } from './styles';
import { IFood } from '../../@types/interfaces';

const Dashboard = () => {
  const [foods, setFoods] = useState<IFood[]>([])
  const [editingFood, setEditingFood] = useState<IFood>({} as IFood)
  const [modalOpen, setModalOpen] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)

  const loadFoods = async () => {
    try {
      const response = await api.get('/foods');
      setFoods(response.data)
    } catch (err) {
      console.log(err);
    }
  }

  const handleAddFood = async (food: IFood) => {
    try {
      const response = await api.post('/foods', {
        ...food,
        available: true,
      });

      setFoods(state => [...state, response.data]);
    } catch (err) {
      console.log(err);
    }
  }

  const handleUpdateFood = async (food: IFood) => {
    try {
      const foodUpdated = await api.put(
        `/foods/${editingFood.id}`,
        { ...editingFood, ...food },
      );

      setFoods(state => state.map(f => f.id !== foodUpdated.data.id ? f : foodUpdated.data))
    } catch (err) {
      console.log(err);
    }
  }

  const handleDeleteFood = async (id: IFood['id']) => {
    try {
      await api.delete(`/foods/${id}`);
      setFoods(state => state.filter(food => food.id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  const toggleModal = () => {
    setModalOpen(state => !state)
  }

  const toggleEditModal = () => {
    setEditModalOpen(state => !state)
  }

  const handleEditFood = (food: IFood) => {
    setEditingFood(food)
    setEditModalOpen(true)
  }

  useEffect(() => {
    loadFoods()
  }, [])

  return (
    <>
      <Header openModal={toggleModal} />
      <ModalAddFood
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddFood={handleAddFood}
      />
      <ModalEditFood
        isOpen={editModalOpen}
        toggleIsOpen={toggleEditModal}
        food={editingFood}
        handleUpdateFood={handleUpdateFood}
      />

      <FoodsContainer data-testid="foods-list">
        {foods &&
          foods.map(food => (
            <Food
              key={food.id}
              food={food}
              handleDelete={handleDeleteFood}
              handleEditFood={handleEditFood}
            />
          ))}
      </FoodsContainer>
    </>
  );
}

export default Dashboard

