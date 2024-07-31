import {
  Box, Grid, Stack,
} from "@mui/material";
import { ProductCard } from "../../../../components/ProductCard";
import { Heading } from "../../../../components/UI/Heading";
import { categoryNames, products } from "../../../../data/data";

export const Categories = () => {
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
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                      <ProductCard
                        name={product.name}
                        group={product.group}
                        ranking={product.ranking}
                        reviews={product.reviews}
                        price={product.price}
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
