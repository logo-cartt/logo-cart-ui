import { useProductCard } from "../useProductCard";
import { ProductCounter } from "./ProductCounter";
import { AddButton } from "../../UI/AddButton";
import { Product } from "../../../types/types";

type Props = {
  id: number;
  product: Product;
  numberOfItems: number;
  borderRadius: string;
  height: string;
};

export default function ProductButton({
  id, product, numberOfItems, borderRadius, height,
}: Props) {
  const { onAddToCart, onRemoveFromCart } = useProductCard();
  const handleClick = () => {
    onRemoveFromCart(id);
  };
  return (
    <div>
      {" "}
      {numberOfItems === 0

        ? (
          <AddButton
            onClick={() => onAddToCart(product)}
            sx={{ borderRadius, textTransform: "none", height }}
          >
            + Add to cart
          </AddButton>
        )
        : (
          <ProductCounter
            onClickEvent={handleClick}
            onAddProduct={onAddToCart}
            numberOfItems={numberOfItems}
            product={product}
            height={height}
          />
        )}
    </div>
  );
}
