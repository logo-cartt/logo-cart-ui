import { Grid, Typography } from "@mui/material";

export function Search() {
  return (
    <Grid container={true}>
      <Grid item={true} xs={12} textAlign="left" pt={4} pb={4}>
        <Typography variant="h5" fontSize="1.8125rem" fontWeight="600">
          Results
        </Typography>
      </Grid>

    </Grid>
  );
}
