import {
  Box, Grid, Stack,
} from "@mui/material";
import { ProductCard } from "../../../../components/Product/ProductCard";
import { Heading } from "../../../../components/UI/Heading";
import { categoryNames, products } from "../../../../data-mock/data";
// import { useProductCard } from "../../../../components/Product/useProductCard";

export function Categories() {
  // const { onAddToCart, onRemoveFromCart } = useProductCard();
  return (
    <Box>
      <Stack alignItems="start" padding="0px">
        {categoryNames.map((category) => {
          return (
            <Box key={category.id}>
              <Heading
                fontWeight="bold"
                marginTop="57px"
                marginBottom="30px"
                textAlign="left"
              >
                {`${category.name} >`}
              </Heading>
              <Grid container={true} spacing={5}>
                {products.map((product) => {
                  return (
                    <Grid item={true} xs={12} sm={6} md={4} lg={3} key={product.id}>
                      <ProductCard
                        product={product}
                        // onAddToCart={onAddToCart}
                        // onRemoveFromCart={onRemoveFromCart}
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
}
