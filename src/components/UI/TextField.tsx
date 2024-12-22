/* eslint-disable @typescript-eslint/no-explicit-any */
import MuiTextField, { type TextFieldProps } from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import {
  type FieldValues,
  useController,
  type FieldPath,
  type UseControllerProps,
  useFormContext,
  UseFormReturn,
} from "react-hook-form";

type InputProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = UseControllerProps<TFieldValues, TName> & Omit<TextFieldProps, "control">;

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
  TTransformedValues extends FieldValues | undefined,
  TName extends FieldPath<TFieldValues>,
  TContext = any,
>({ name, rules, ...props }: InputProps<TFieldValues, TName>) {
  const { control } = useFormContext() as UseFormReturn<
  TFieldValues,
  TContext,
  TTransformedValues
  >;
  const { field, fieldState } = useController({
    name,
    control,
    rules,
  });
  return (
    <TextFieldStyled
      {...props}
      {...field}
      fullWidth={true}
      error={!!fieldState.error}
      helperText={fieldState.error ? fieldState.error.message : ""}
      size="small"
    />
  );
}
