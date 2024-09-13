import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { Product } from "../../types/types";
import { ProductCardItemCounter } from "./ProductCardItemCounter";
import { useAppSelector } from "../../store/hooks";

type Props = {
  product: Product;
  onAddToCart: (product: Product) => void;
  onRemoveFromCart: (id: number) => void;
};

export function ProductCard({ product, onAddToCart, onRemoveFromCart }: Props) {
  const { cartItems } = useAppSelector((state) => state.cart);
  const {
    id, group, name, price, ranking, reviews,
  } = product;

  const selectedItem = cartItems.find((cartItem) => cartItem.product.id === id);
  const numberOfItems = selectedItem?.quantity || 0;

  const handleClick = () => {
    onRemoveFromCart(id);
  };

  return (
    <Card sx={{ maxWidth: 255, border: "1px solid #777777" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="211"
        image="src\assets\img\t-shirt.png"
      />
      <CardContent sx={{ "&:last-child": { padding: "0px" } }}>
        <Stack alignItems="start" padding="28px 23px 28px 22px">
          <Typography variant="h5" fontSize="1.125rem" fontWeight="600">
            {name}
          </Typography>
          <Typography variant="body1" component="h6" fontWeight="600">
            {group}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {`${ranking} (${reviews} reviews)`}
          </Typography>
          <Typography variant="h5" fontSize="1.125rem" fontWeight="600">
            {`$${price}`}
          </Typography>
        </Stack>
        {numberOfItems === 0

          ? (
            <Button
              onClick={() => onAddToCart(product)}
              variant="contained"
              color="violet"
              fullWidth
              sx={{ borderRadius: "0px 0px 5px 5px" }}
            >
              <Typography variant="body1" color="#fff">
                + Add to cart
              </Typography>
            </Button>
          )
          : (
            <ProductCardItemCounter
              onClickEvent={handleClick}
              onAddProduct={onAddToCart}
              numberOfItems={numberOfItems}
              product={product}
            />
          )}
      </CardContent>
    </Card>
  );
}
