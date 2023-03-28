import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductFormatted } from '../../@types';
import { ProductList } from './styles';
import { api } from '../../services/api';
import { formatPrice } from '../../util/format';
import { useCart } from '../../hooks/useCart';
import { ProductCard } from '../../components/ProductCard';


const Home = (): JSX.Element => {
  const [products, setProducts] = useState<ProductFormatted[]>([]);
  // const { addProduct, cart } = useCart();

  // const cartItemsAmount = cart.reduce((sumAmount, product) => {
  //   // TODO
  // }, {} as CartItemsAmount)

  useEffect(() => {
    async function loadProducts() {
      api.get('products')
        .then(response => setProducts(response.data))
        .catch(error => console.error(error))
        ;
    }

    loadProducts();
  }, []);

  useEffect(() => { console.log(products) }, [products])

  function handleAddProduct(id: number) {
    // TODO
  }

  return (
    <ProductList>
      {products.map(product => (<ProductCard product={product} onAddProduct={handleAddProduct} />))}
    </ProductList>
  );
};

export default Home;
