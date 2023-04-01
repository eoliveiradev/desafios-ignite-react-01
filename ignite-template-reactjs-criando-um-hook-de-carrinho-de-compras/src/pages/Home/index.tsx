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
  const { addProduct } = useCart();

  useEffect(() => {
    async function loadProducts() {
      api.get('products')
        .then(response => setProducts(response.data))
        .catch(error => console.error(error))
        ;
    }

    loadProducts();
  }, []);

  function handleAddProduct(id: number) {
    addProduct(id);
  }

  return (
    <ProductList>
      {products.map(product => (<ProductCard key={product.id} product={product} onAddProduct={handleAddProduct} />))}
    </ProductList>
  );
};

export default Home;
