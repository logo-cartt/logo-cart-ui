import { Button, Stack, Typography } from "@mui/material";
import { Product } from "../../types/types";

interface IProductCardItemCounterProps {
  onClickEvent: () => void;
  onAddProduct: (product: Product) => void;
  numberOfItems: number;
  product: Product;
}

export const ProductCardItemCounter: React.FC<IProductCardItemCounterProps> = ({
  onClickEvent, onAddProduct, numberOfItems, product,
}) => {
  return (
    <Stack alignItems="center" justifyContent="space-between" flexDirection="row">

      <Button
        onClick={onClickEvent}
        variant="contained"
        color="violet"
        sx={{ borderRadius: "0px 0px 5px 5px", width: "10px" }}
      >
        <Typography variant="body1" color="#fff">
          -
        </Typography>
      </Button>
      <Typography variant="body1" color="black" width="40px" fontSize="1.2rem">
        {numberOfItems}
      </Typography>
      <Button
        onClick={() => onAddProduct(product)}
        variant="contained"
        color="violet"
        sx={{ width: "10px !important", borderRadius: "0px 0px 5px 5px" }}
      >
        <Typography variant="body1" color="#fff">
          +
        </Typography>
      </Button>
    </Stack>
  );
};
