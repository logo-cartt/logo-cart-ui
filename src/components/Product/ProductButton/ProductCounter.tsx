import { Stack, Typography } from "@mui/material";
import { Product } from "../../../types/types";
import { CounterButton } from "../../UI/CounterButton";

interface IProductCounterProps {
  onClickEvent: () => void;
  onAddProduct: (product: Product) => void;
  numberOfItems: number;
  product: Product;
  height: string;
}

export const ProductCounter: React.FC<IProductCounterProps> = ({
  onClickEvent, onAddProduct, numberOfItems, product, height,
}) => {
  return (
    <Stack alignItems="center" justifyContent="space-between" flexDirection="row" border="1px solid #777" borderRadius="5px" height={height}>

      <CounterButton
        onClick={onClickEvent}
      >
        -
      </CounterButton>
      <Typography variant="body1" color="black" width="40px" fontSize="1.2rem" textAlign="center">
        {numberOfItems}
      </Typography>
      <CounterButton
        onClick={() => onAddProduct(product)}
      >
        +
      </CounterButton>
    </Stack>
  );
};
