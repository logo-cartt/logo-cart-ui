import {
  Stack,
  Link as MuiLink,
  LinkProps as MuiLinkProps,
  TextField,
  InputAdornment,
  Typography,
  Button,
} from "@mui/material";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  useNavigate,
  useSearchParams,
} from "react-router";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { logout } from "../../store/features/tokenSlice";
import { routes } from "../../constants/route.constants";
import { useState } from "react";

type StyledLinkProps = MuiLinkProps & RouterLinkProps;
const LinkStyled = styled(MuiLink)<StyledLinkProps>({
  textDecoration: "none",
  fontWeight: "bold",
  "&:hover": {
    color: "#747bff",
  },
});

export function HeaderNav() {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useSearchParams();
  const navigate = useNavigate();
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);
  const isAuthenticated = useAppSelector(
    (state) => state.token.isAuthenticated
  );
  const [inputValue, setInputValue] = useState(search.get("product") || "");

  const handleSearch = () => {
    setSearch({ product: inputValue });
    navigate(`/search?product=${inputValue}`);
  };

  const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  const handleClick = () => {
    handleSearch();
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <Stack spacing={3} direction="row" alignItems="center">
      <LinkStyled
        component={RouterLink}
        to={routes.Home}
        sx={{ paddingRight: "77px" }}
      >
        Categories
      </LinkStyled>
      <TextField
        label="T-shirt"
        size="small"
        type="search"
        fullWidth={true}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleSubmit}
        value={inputValue}
        sx={{
          width: "368px",
          "& .MuiOutlinedInput-root": { paddingRight: "0px" },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button onClick={handleClick}>
                <SearchIcon />
              </Button>
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
        <LinkStyled component={RouterLink} to={routes.Login}>
          Login
        </LinkStyled>
      )}

      <LinkStyled component={RouterLink} to={routes.Home}>
        Favourite
      </LinkStyled>
      <LinkStyled component={RouterLink} to={routes.Cart}>
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
