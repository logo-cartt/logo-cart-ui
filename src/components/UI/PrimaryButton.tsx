import Button, { ButtonProps } from "@mui/material/Button";
import React from "react";
import { styled } from "@mui/material/styles";

type Props = {
  children: React.ReactNode
} & ButtonProps;

const ButtonStyled = styled(Button)({
  color: "white",
  fontSize: "24px",
  height: "54px",
  textTransform: "none",
  fontWeight: "600",
});

export const PrimaryButton = ({ children, ...props }: Props) => {
  return (
    <ButtonStyled
      type="submit"
      color="violet"
      variant="contained"
      fullWidth
      disableElevation
      {...props}
    >
      { children }
    </ButtonStyled>
  );
};
