import MuiTextField, { TextFieldProps } from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

type Props = TextFieldProps;

const TextFieldStyled = styled(MuiTextField)({
  borderRadius: "5px",
  border: "1px solid black",
  color: "black",
  "& input": {
    "&::placeholder": {
      color: "black",
    },
  },
});
export const TextField = ({ children, ...props }: Props) => {
  return (
    <TextFieldStyled
      size="small"
      fullWidth
      {...props}
    >
    </TextFieldStyled>
  );
};
