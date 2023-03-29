import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { Product, Stock } from '../@types';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem('@RocketShoes:cart');
    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addProduct = async (productId: number) => {
    try {
      const isProductInStock = await api.get(`stock/${productId}`)
        .then(response => response.data.amount > 0)
        .catch(error => { throw new Error('Erro na adição do produto') });

      if (!isProductInStock) {
        throw new Error('Quantidade solicitada fora de estoque')
      }

      const isProductInCart = cart.find(product => product.id === productId);

      if (isProductInCart) {
        return updateProductAmount({
          productId,
          amount: isProductInCart.amount + 1
        });
      }

      const product = await api.get(`products/${productId}`)
        .then(response => response.data)
        .catch(error => { throw new Error('Erro na adição do produto') });

      if (!product) {
        throw new Error('Erro na adição do produto')
      }

      setCart(state => [...state, { ...product, amount: 1 }]);

    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const removeProduct = (productId: number) => {
    try {
      // TODO
    } catch {
      // TODO
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      // TODO
    } catch {
      // TODO
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
