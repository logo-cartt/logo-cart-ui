import { products } from "../../../data-mock/data";
import { useProductCard } from "../useProductCard";
import { ProductCounter } from "./ProductCounter";
import { AddButton } from "../../UI/AddButton";

type Props = {
  numberOfItems: number;
  borderRadius: string;
  height: string;
};

export default function ProductButton({ numberOfItems, borderRadius, height }: Props) {
  const {
    id,
  } = products[0];
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
            onClick={() => onAddToCart(products[0])}
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
            product={products[0]}
            height={height}
          />
        )}
    </div>
  );
}
