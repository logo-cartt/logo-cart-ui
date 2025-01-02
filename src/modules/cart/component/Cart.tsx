import { Box } from "@mui/material";
import { useAppSelector } from "../../../store/hooks";

export function Cart() {
  const { cartItems } = useAppSelector((state) => state.cart);
  return (
    <Box>
      {cartItems.length > 0 ? (cartItems.map((cartItem) => (
        // <Box>
        <Box>{cartItem.quantity}</Box>
        // </Box>
      ))) : ""}
    </Box>
  );
}
