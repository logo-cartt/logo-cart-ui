import {
  Box, Grid, Stack,
} from "@mui/material";
import { ProductCart } from "../../../../components/ProductCart";
import { Heading } from "../../../../components/UI/Heading";
import { categoryNames, products } from "../../../../data/data";
import { useProductCart } from "../../../../components/ProductCart/useProductCart";

export const Categories = () => {
  const { onAddToCart, onRemoveFromCart } = useProductCart();
  return (
    <Box>
      <Stack alignItems="start" padding="0px">
        {categoryNames.map((category) => {
          return (
            <Box>
              <Heading
                key={category.id}
                fontWeight="bold"
                marginTop="57px"
                marginBottom="30px"
                textAlign="left"
              >
                {`${category.name} >`}
              </Heading>
              <Grid container spacing={5}>
                {products.map((product) => {
                  return (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <ProductCart
                        // key={product.id}
                        product={product}
                        onAddToCart={onAddToCart}
                        onRemoveFromCart={onRemoveFromCart}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};
