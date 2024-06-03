import { Stack } from "@mui/material";
import { Heading } from "../UI/Heading";
import { HeaderNav } from "./HeaderNav";

export const Header = () => {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between" padding="14px 19px">
      <Heading color="secondary" fontWeight="bold">
        LogoCart
      </Heading>

      <HeaderNav />
    </Stack>
  );
};
