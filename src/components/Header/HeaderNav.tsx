import {
  Stack,
  Link as MuiLink,
  LinkProps as MuiLinkProps,
  TextField,
  InputAdornment,
  Typography,
  Button,
} from "@mui/material";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { logout } from "../../store/features/tokenSlice";

type StyledLinkProps = MuiLinkProps & RouterLinkProps;
const LinkStyled = styled(MuiLink)<StyledLinkProps>({
  textDecoration: "none",
  fontWeight: "bold",
  "&:hover": {
    color: "#747bff",
  },
});

export function HeaderNav() {
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);
  const isAuthenticated = useAppSelector(
    (state) => state.token.isAuthenticated,
  );
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <Stack spacing={3} direction="row" alignItems="center">
      <LinkStyled
        component={RouterLink}
        to="/"
        sx={{ paddingRight: "77px" }}
      >
        Categories
      </LinkStyled>
      <TextField
        label="T-shirt"
        size="small"
        type="search"
        fullWidth={true}
        sx={{ width: "368px" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      {isAuthenticated ? (
        <Button
          onClick={handleLogout}
          sx={{ fontWeight: "bold", textTransform: "none", fontSize: "1rem" }}
        >
          Logout
        </Button>
      ) : (
        <LinkStyled
          component={RouterLink}
          to="/login"
        >
          Login
        </LinkStyled>
      )}

      <LinkStyled component={RouterLink} to="/">
        Favourite
      </LinkStyled>
      <LinkStyled component={RouterLink} to="/cart">
        Cart
        <Typography
          component="span"
          color="white"
          sx={{
            display: "inline-block",
            maxWidth: "30px",
            height: "100%",
            backgroundColor: "#750DFA",
            marginLeft: "5px",
          }}
        >
          {totalQuantity}
        </Typography>
      </LinkStyled>
    </Stack>
  );
}
