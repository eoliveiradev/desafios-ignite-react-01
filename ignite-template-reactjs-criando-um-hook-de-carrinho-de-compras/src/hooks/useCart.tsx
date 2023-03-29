import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { CartItemsAmount, Product, Stock } from '../@types';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  cartItemsAmount: CartItemsAmount;
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
      const productIndex = cart.findIndex(product => product.id === productId);

      if (productIndex < 0) {
        throw new Error('Erro na remoção do produto');
      }

      setCart(state => state.filter(product => product.id !== productId));

    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      const amountInStock = await api.get(`stock/${productId}`)
        .then(response => response.data.amount)
        .catch(error => { throw new Error('Erro na alteração de quantidade do produto') });

      const productInCart = cart.find(product => product.id === productId);

      if (!productInCart) {
        throw new Error('Erro na alteração de quantidade do produto');
      }

      const isAmountInStock = amountInStock >= amount;

      if (!isAmountInStock) {
        throw new Error('Quantidade solicitada fora de estoque');
      }

      setCart(state => state.map(product => {
        return product.id === productId ? { ...product, amount } : product
      }));

    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    return { ...sumAmount, [product.id]: product.amount };
  }, {} as CartItemsAmount)

  useEffect(() => {
    localStorage.setItem('@RocketShoes:cart', JSON.stringify(cart));
  }, [cart])

  const Context: CartContextData = {
    cart,
    addProduct,
    removeProduct,
    updateProductAmount,
    cartItemsAmount
  }

  return (
    <CartContext.Provider
      value={Context}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
