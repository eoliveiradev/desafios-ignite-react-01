import { MdAddShoppingCart } from "react-icons/md";
import { ProductFormatted } from "../../@types";
import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../util/format";

interface ProductCardProps {
  product: ProductFormatted;
  onAddProduct: (id: number) => void;
}

export const ProductCard = (props: ProductCardProps) => {
  const { product: { id, image, price, title }, onAddProduct } = props

  const { cartItemsAmount } = useCart()

  return (
    <li>
      <img src={image} alt={title} />
      <strong>{title}</strong>

      <span>{formatPrice(price)}</span>
      <button
        type="button"
        data-testid="add-product-button"
        onClick={() => onAddProduct(id)}
      >
        <div data-testid="cart-product-quantity">
          <MdAddShoppingCart size={16} color="#FFF" />
          {cartItemsAmount[id] || 0}
        </div>

        <span>ADICIONAR AO CARRINHO</span>
      </button>
    </li>
  )
}