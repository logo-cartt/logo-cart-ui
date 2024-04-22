import {
  Stack, Link, TextField, InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const HeaderNav = () => {
  return (
    <Stack spacing={3} direction="row" alignItems="center">
      <Link href="/#" underline="none" fontWeight="bold" paddingRight="77px">
        Categories
      </Link>
      <TextField
        label="T-shirt"
        size="small"
        type="search"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        style={{ width: "368px" }}
      >
      </TextField>
      <Link href="/#" underline="none" fontWeight="bold">
        Login
      </Link>
      <Link href="/#" underline="none" fontWeight="bold">
        Favourite
      </Link>
      <Link href="/#" underline="none" fontWeight="bold">
        Cart
      </Link>
    </Stack>
  );
};
