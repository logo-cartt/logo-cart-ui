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

export const ProductCard = () => {
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
            T-Shirt. Blue
          </Typography>
          <Typography variant="body1" component="h6" fontWeight="600">
            Clothes
          </Typography>
          <Typography variant="body1" color="text.secondary">
            4.8 (11285 reviews)
          </Typography>
          <Typography variant="h5" fontSize="1.125rem" fontWeight="600">
            $16.99
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
