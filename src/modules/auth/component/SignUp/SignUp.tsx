import {
  Grid,
} from "@mui/material";
import { PrimaryButton } from "../../../../components/UI/PrimaryButton";
import { TextField } from "../../../../components/UI/TextField";
import { Heading } from "../../../../components/UI/Heading";

export const SignUp = () => {
  return (
    <Grid
      container
      justifyContent="flex-start"
      alignItems="center"
      spacing={6}
    >
      <Grid item sm={8} lg={12}>
        <Heading align="left" padding="32px 0 0 0">Sign up</Heading>
      </Grid>

      <Grid
        item
        sm={5}
        lg={5}
      >
        <Grid container spacing={2}>
          <Grid item sm={12} spacing={2}>

            <form>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  <TextField label="Email" placeholder="email@gmail.com" type="email" />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Seller name" placeholder="Seller name" type="text" size="small" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Password" placeholder="********" type="password" size="small" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Confirm password" placeholder="********" type="password" size="small" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <PrimaryButton>
                    Submit
                  </PrimaryButton>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
