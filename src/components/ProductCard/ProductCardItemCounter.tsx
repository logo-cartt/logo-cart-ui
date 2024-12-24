import { Button, Stack, Typography } from "@mui/material";
import { Product } from "../../types/types";

interface IProductCardItemCounterProps {
  onClickEvent: () => void;
  onAddProduct: (product: Product) => void;
  numberOfItems: number;
  product: Product;
  pageType?: string;
}

export const ProductCardItemCounter: React.FC<IProductCardItemCounterProps> = ({
  onClickEvent, onAddProduct, numberOfItems, product, pageType = "",
}) => {
  const variant = pageType === "main" ? "body1" : "h5";
  const color = pageType === "main" ? "#fff" : "#000";
  const buttonColor = pageType === "main" ? "violet" : "gray";
  const height = pageType === "main" ? "34px" : "54px";

  return (
    <Stack alignItems="center" justifyContent="space-between" flexDirection="row" border="1px solid #777" borderRadius="5px" height={height}>

      <Button
        onClick={onClickEvent}
        variant="contained"
        color={pageType === "main" ? "violet" : "gray"}
        sx={{ borderRadius: "0px 0px 5px 5px", width: "10px", height: "100%" }}
      >
        <Typography variant={variant} color={color}>
          -
        </Typography>
      </Button>
      <Typography variant={variant} color="black" width="40px" fontSize="1.2rem" textAlign="center">
        {numberOfItems}
      </Typography>
      <Button
        onClick={() => onAddProduct(product)}
        variant="contained"
        color={buttonColor}
        sx={{ width: "10px !important", borderRadius: "0px 0px 5px 5px", height: "100%" }}
      >
        <Typography variant={variant} color={color}>
          +
        </Typography>
      </Button>
    </Stack>
  );
};
