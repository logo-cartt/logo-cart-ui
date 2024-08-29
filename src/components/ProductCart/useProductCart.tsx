import { Product } from "../../types/types";
import { useAppDispatch } from "../../store/hooks";
import { addItem, removeItem } from "../../store/features/cartSlice";

export const useProductCart = () => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (item: Product) => {
    dispatch(addItem(item));
  };

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeItem(id));
  };

  return {
    onAddToCart: handleAddToCart,
    onRemoveFromCart: handleRemoveFromCart,
  };
};
