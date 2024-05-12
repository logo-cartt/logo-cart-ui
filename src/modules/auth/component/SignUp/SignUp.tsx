import {
  Button, Grid,
  TextField, Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const TextFieldStyled = styled(TextField)({
  marginTop: "51px",
  borderRadius: "5px",
  color: "black",
  "& input": {
    "&::placeholder": {
      color: "black",
    },
  },
});

const ButtonStyled = styled(Button)({
  color: "white",
  fontSize: "24px",
  marginTop: "32px",
  height: "54px",
  // fontFamily: "Inter",
  textTransform: "none",
  fontWeight: "600",
});

export const SignUp = () => {
  return (
    <Grid
      container
      justifyContent="flex-start"
      alignItems="center"
    >
      <Grid item sm={8} lg={12}>
        <Typography align="left" variant="h5" fontSize="29px" padding="32px 0 0 0">Sign up</Typography>
      </Grid>

      <Grid
        item
        sm={5}
        lg={5}
      >
        <Grid container spacing={2}>
          <Grid item sm={12} spacing={2}>

            <form>
              <TextFieldStyled label="Email" placeholder="email@gmail.com" type="email" size="small" fullWidth />
              <TextFieldStyled label="Seller name" placeholder="Seller name" type="text" size="small" fullWidth />
              <TextFieldStyled label="Password" placeholder="********" type="password" size="small" fullWidth />
              <TextFieldStyled label="Confirm password" placeholder="********" type="password" size="small" fullWidth />
              <ButtonStyled
                type="submit"
                color="violet"
                variant="contained"
                fullWidth
                disableElevation
              >
                Submit
              </ButtonStyled>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
