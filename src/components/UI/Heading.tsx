import Typography, { TypographyProps } from "@mui/material/Typography";
import React from "react";

type Props = {
  children: React.ReactNode
} & TypographyProps;

export function Heading({ children, ...props }: Props) {
  return (
    <Typography variant="h5" fontSize="29px" {...props}>
      { children }
    </Typography>
  );
}
