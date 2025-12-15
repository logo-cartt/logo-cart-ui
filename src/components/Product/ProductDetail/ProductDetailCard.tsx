import { Grid } from "@mui/material";
import { products } from "../../../data-mock/data";
import { useAppSelector } from "../../../store/hooks";
import { ProductTypography } from "../../UI/ProductTypography";
import ProductButton from "../ProductButton/ProductButton";

export function ProductDetailCard() {
  const { cartItems } = useAppSelector((state) => state.cart);
  const {
    id, image, seller, deliveryTime, deliveryPrice, quantity, price,
  } = products[0];

  const selectedItem = cartItems.find((cartItem) => cartItem.product.id === id);
  const numberOfItems = selectedItem?.quantity || 0;
  const total = (numberOfItems * price).toFixed(2);

  return (
    <Grid container={true} mt="30px" spacing={2}>
      <Grid
        item={true}
        sx={{ backgroundColor: "#D9D9D9", maxWidth: "635px" }}
      >
        <img src={image} alt="tshirt" height="524" />
      </Grid>
      <Grid item={true} sx={{ minWidth: "400px", minHeight: "100%" }}>
        <Grid container={true} flexDirection="column" paddingLeft="30px" justifyContent="space-between" height="100%">
          <Grid item={true} textAlign="left">
            <ProductTypography>
              Seller:
              {" "}
              {seller}
            </ProductTypography>
            <ProductTypography>
              Delivery:
              {deliveryTime}
              ,
              {" "}
              {deliveryPrice}
              .
            </ProductTypography>
            <ProductTypography>
              Left in stock:
              {" "}
              {quantity - numberOfItems}
            </ProductTypography>
          </Grid>
          <Grid item={true} textAlign="left">
            <ProductTypography mb={4}>
              Total:
              {" "}
              $
              {total}
            </ProductTypography>
            <ProductButton id={id} product={products[0]} numberOfItems={numberOfItems} borderRadius="5px" height="54px" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
