import { Grid, Typography } from "@mui/material";
import { useAppSelector } from "../../../store/hooks";
import { ProductCard } from "../../../components/Product/ProductCard";
import Checkout from "./Checkout";

export function Cart() {
  const { cartItems } = useAppSelector((state) => state.cart);
  return (
    <>
      <Grid container={true}>
        <Grid item={true} xs={12} textAlign="left" pt={4} pb={4}>
          <Typography variant="h5" fontSize="1.8125rem" fontWeight="600">
            Cart
          </Typography>
        </Grid>
      </Grid>
      <Grid container={true} spacing="30px">
        <Grid item={true} xs={9}>
          <Grid container={true} flexDirection="row" justifyContent="flex-start" spacing="30px">
            {cartItems.length > 0 ? (cartItems.map((cartItem) => (
              <Grid item={true}>
                <ProductCard product={cartItem.product}>
                  <Typography variant="h5" fontSize="1.125rem" fontWeight="600">
                    {`$${(cartItem.quantity * cartItem.product.price).toFixed(2)}`}
                  </Typography>
                </ProductCard>
              </Grid>
            ))) : (
              <Grid item={true}>
                <Typography variant="h4">Your cart is empty</Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
        <Grid item={true} xs={3}>
          <Checkout />
        </Grid>
      </Grid>
    </>
  );
}
