/* eslint-disable no-console */
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { useRef } from "react";
import { Product } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addItem, removeItem } from "../../store/features/cartSlice";

export const ProductCard = ({ product }: { product: Product }) => {
  const productRef = useRef<HTMLDivElement | null>(null);
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleAddToCart = (item: Product) => {
    dispatch(addItem(item));
  };

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeItem(id));
  };

  const {
    id, group, name, price, ranking, reviews,
  } = product;

  const productId = productRef.current ? parseInt(productRef.current.dataset.id || "0", 10) : 0;
  const selectedItem = cart.cart.find((item) => item.product.id === productId);
  const numberOfItems = selectedItem?.quantity || 0;

  const handleClick = () => {
    handleRemoveFromCart(productId);
  };

  return (
    <Card sx={{ maxWidth: 255, border: "1px solid #777777" }} data-id={id} ref={productRef}>
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
              onClick={() => handleAddToCart(product)}
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
            <Stack alignItems="center" justifyContent="space-between" flexDirection="row">

              <Button
                onClick={handleClick}
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
                onClick={() => handleAddToCart(product)}
                variant="contained"
                color="violet"
                sx={{ width: "10px !important", borderRadius: "0px 0px 5px 5px" }}
              >
                <Typography variant="body1" color="#fff">
                  +
                </Typography>
              </Button>
            </Stack>
          )}
      </CardContent>
    </Card>
  );
};
