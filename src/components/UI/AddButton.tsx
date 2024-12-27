import Button, { ButtonProps } from "@mui/material/Button";
import React from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

type Props = {
  children: React.ReactNode
} & ButtonProps;

const ButtonStyled = styled(Button)({
  textTransform: "none",
});

export function AddButton({ children, ...props }: Props) {
  return (
    <ButtonStyled
      color="violet"
      variant="contained"
      fullWidth={true}
      {...props}
    >
      <Typography variant="body1" color="#fff" textTransform="none">
        { children }
      </Typography>
    </ButtonStyled>
  );
}
