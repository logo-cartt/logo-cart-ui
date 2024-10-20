import MuiTextField, { type TextFieldProps } from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import {
  type FieldValues,
  type FieldPath,
  type UseControllerProps,
  useController,
} from "react-hook-form";

type InputProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = UseControllerProps<TFieldValues, TName> & TextFieldProps;

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
export function TextField<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  control, name, rules, ...props
}: InputProps<TFieldValues, TName>) {
  const { field } = useController({ rules, control, name });
  return (
    <TextFieldStyled {...field} {...props} fullWidth={true} size="small" />
  );
}
