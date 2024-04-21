import { Typography, Stack } from '@mui/material';
import { HeaderNav } from './HeaderNav';

export const Header = () => {
  return (
    <Stack direction="row" width="1100px" alignItems="center" justifyContent="space-evenly">
      <Typography variant="h5" fontSize="29px" color="secondary" fontWeight="bold">
        LogoCart
      </Typography>

      <HeaderNav />
    </Stack>
  );
};
