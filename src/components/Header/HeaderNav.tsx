import {
  Stack, Link, TextField, InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";

const LinkStyled = styled(Link)({
  "&:hover": {
    color: "#747bff",
  },
});

export const HeaderNav = () => {
  return (
    <Stack spacing={3} direction="row" alignItems="center">
      <Link href="/#" underline="none" fontWeight="bold" sx={{ paddingRight: "77px" }}>
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
      <LinkStyled href="/#" underline="none" fontWeight="bold">
        Login
      </LinkStyled>
      <LinkStyled href="/#" underline="none" fontWeight="bold">
        Favourite
      </LinkStyled>
      <LinkStyled href="/#" underline="none" fontWeight="bold">
        Cart
      </LinkStyled>
    </Stack>
  );
};
