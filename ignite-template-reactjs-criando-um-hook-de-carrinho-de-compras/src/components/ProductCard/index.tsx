import { MdAddShoppingCart } from "react-icons/md";
import { ProductFormatted } from "../../@types";

interface ProductCardProps {
  product: ProductFormatted;
  onAddProduct: (id: number) => void;
}

export const ProductCard = (props: ProductCardProps) => {
  const { product: { id, image, priceFormatted, title }, onAddProduct } = props

  return (
    <li>
      <img src={image} alt="Tênis de Caminhada Leve Confortável" />
      <strong>{title}</strong>
      <span>{priceFormatted}</span>
      <button
        type="button"
        data-testid="add-product-button"
        onClick={() => onAddProduct(id)}
      >
        <div data-testid="cart-product-quantity">
          <MdAddShoppingCart size={16} color="#FFF" />
          {/* {cartItemsAmount[product.id] || 0} */} 2
        </div>

        <span>ADICIONAR AO CARRINHO</span>
      </button>
    </li>
  )
}