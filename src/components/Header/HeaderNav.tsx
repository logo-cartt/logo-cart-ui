import {
  Stack,
  Link,
  TextField,
  InputAdornment,
  Typography,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { logout } from "../../store/features/tokenSlice";

const LinkStyled = styled(Link)({
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
      <Link
        href="/#"
        underline="none"
        fontWeight="bold"
        sx={{ paddingRight: "77px" }}
      >
        Categories
      </Link>
      <TextField
        label="T-shirt"
        size="small"
        type="search"
        fullWidth
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
        <LinkStyled href="/#" underline="none" fontWeight="bold">
          Login
        </LinkStyled>
      )}

      <LinkStyled href="/#" underline="none" fontWeight="bold">
        Favourite
      </LinkStyled>
      <LinkStyled href="/#" underline="none" fontWeight="bold">
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
