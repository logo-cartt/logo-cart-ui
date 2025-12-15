import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { Product } from "../../../types/types";
import { useAppSelector } from "../../../store/hooks";
import ProductButton from "../ProductButton/ProductButton";

type Props = {
  children: React.ReactNode;
  product: Product;
};

export function ProductCard({ children, product }: Props) {
  const { cartItems } = useAppSelector((state) => state.cart);
  const {
    id, group, name, ranking, reviews, image,
  } = product;

  const selectedItem = cartItems.find((cartItem) => cartItem.product.id === id);
  const numberOfItems = selectedItem?.quantity || 0;

  return (
    <Card sx={{ maxWidth: 255, border: "1px solid #777777" }}>
      <CardMedia
        component="img"
        alt="t-shirt"
        height="211"
        image={image}
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
          {children}
        </Stack>

        <ProductButton id={id} product={product} numberOfItems={numberOfItems} borderRadius="0px 0px 5px 5px" height="34px" />

      </CardContent>
    </Card>
  );
}
