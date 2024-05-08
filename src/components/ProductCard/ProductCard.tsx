import {
  Button,
  // Button,
  Card,
  // CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { Product } from "../../types/types";

export const ProductCard = ({
  name,
  group,
  ranking,
  reviews,
  price,
}: Omit<Product, "id">) => {
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
        <Button
          variant="contained"
          color="violet"
          fullWidth
          sx={{ borderRadius: "0px 0px 5px 5px" }}
        >
          <Typography variant="body1" color="#fff">
            + Add to cart
          </Typography>
        </Button>
      </CardContent>
    </Card>
  );
};
