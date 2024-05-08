import { Typography, Stack } from "@mui/material";
import { HeaderNav } from "./HeaderNav";

export const Header = () => {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between" padding="14px 19px">
      <Typography variant="h5" fontSize="29px" color="secondary" fontWeight="bold">
        LogoCart
      </Typography>

      <HeaderNav />
    </Stack>
  );
};
