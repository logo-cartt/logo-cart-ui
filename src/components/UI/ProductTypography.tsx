import Typography, { type TypographyProps } from "@mui/material/Typography";

type Props = {
  children: React.ReactNode
} & TypographyProps;

export function ProductTypography({ children, ...props }: Props) {
  return (
    <Typography
      variant="body1"
      fontSize="1.5rem"
      marginBottom="16px"
      {...props}
    >
      { children }
    </Typography>
  );
}
