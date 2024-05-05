import { Box, Grid, Stack, Typography } from "@mui/material";
import { ProductCard } from "./ProductCard";
import { categoryNames, productCard } from "../../data/data";

export const Categories = () => {
  return (
    <Box>
      <Stack alignItems="start" padding="0px">
        {categoryNames.map((category) => {
          return (
            <Box>
              <Typography
                key={category.id}
                variant="h5"
                fontSize="29px"
                fontWeight="bold"
                marginTop="57px"
                marginBottom="30px"
                textAlign="left"
              >
                {`${category.name} >`}
              </Typography>
              <Grid container spacing={5}>
                {productCard.map((product) => {
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
