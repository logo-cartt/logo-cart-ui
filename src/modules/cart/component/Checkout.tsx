import {
  Box, Card, CardContent, Typography,
} from "@mui/material";
import { useAppSelector } from "../../../store/hooks";
import { PrimaryButton } from "../../../components/UI/PrimaryButton";

export default function Checkout() {
  const { cartItems } = useAppSelector((state) => state.cart);
  const total = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  return (
    <Card sx={{
      width: "100%", maxWidth: 255, border: "1px solid #777777", padding: "16px", textAlign: "left",
    }}
    >
      <CardContent sx={{ "&:last-child": { padding: "0px" } }}>
        <Typography variant="h5" fontSize="1.125rem" fontWeight="600">
          Your orders
        </Typography>
        <Typography variant="h5" fontSize="1.125rem" fontWeight="600" pt={2}>
          {`Total: $${total.toFixed(2)}`}
        </Typography>
        <Box pt={2}>
          <PrimaryButton sx={{ height: "37px" }}>
            <Typography fontWeight="600">Checkout</Typography>
          </PrimaryButton>
        </Box>
      </CardContent>
    </Card>
  );
}
