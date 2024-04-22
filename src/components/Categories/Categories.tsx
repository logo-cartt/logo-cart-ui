import {
  Box, Grid, Stack, Typography,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { ProductCard } from "./ProductCard";

export const Categories = () => {
  const categoryNames = ["Low Prices >", "All >", "Sports >"];
  return (
    <Box>
      <Stack alignItems="start" padding="0px">
        {categoryNames.map((category) => {
          return (
            <Box>
              <Typography
                key={uuidv4()}
                variant="h5"
                fontSize="29px"
                fontWeight="bold"
                marginTop="57px"
                marginBottom="30px"
                textAlign="left"
              >
                {category}
              </Typography>
              <Grid container spacing={5}>
                {[...Array(8)].map(() => {
                  return (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={uuidv4()}>
                      <ProductCard />
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
