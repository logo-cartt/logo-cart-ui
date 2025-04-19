import { Grid, Typography } from "@mui/material";
import { useSearchParams } from "react-router";
import { products } from "../../../data-mock/data";
import { ProductCard } from "../../../components/Product/ProductCard";

export function Search() {
  const [search] = useSearchParams();

  const handleFetchData = () => {
    const queryProduct = search.get("product")?.toLowerCase() || "";
    const response = products;
    const filteredProducts = response.filter(
      (product) => product.name.toLowerCase().includes(queryProduct),
    );
    return filteredProducts;
  };

  const filteredProducts = handleFetchData();

  return (
    <Grid container={true}>
      <Grid item={true} xs={12} textAlign="left" pt={4} pb={4}>
        <Typography variant="h5" fontSize="1.8125rem" fontWeight="600">
          Results
        </Typography>
        <Grid container={true} spacing={5}>
          {filteredProducts.map((filteredProduct) => {
            return (
              <Grid
                item={true}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={filteredProduct.id}
              >
                <ProductCard product={filteredProduct}>
                  {" "}
                  <Typography variant="h5" fontSize="1.125rem" fontWeight="600">
                    {`$${filteredProduct.price}`}
                  </Typography>
                </ProductCard>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
