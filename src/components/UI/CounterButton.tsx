import Button, { ButtonProps } from "@mui/material/Button";
import React from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

type Props = {
  children: React.ReactNode
} & ButtonProps;

const ButtonStyled = styled(Button)({
  borderRadius: "0px 0px 5px 5px",
  height: "100%",
  width: "10px",
});

export function CounterButton({ children, ...props }: Props) {
  return (
    <ButtonStyled
      color="gray"
      variant="contained"
      {...props}
    >
      <Typography variant="h5" color="#000">
        { children }
      </Typography>
    </ButtonStyled>
  );
}
