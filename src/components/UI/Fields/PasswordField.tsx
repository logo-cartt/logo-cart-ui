import {
  type FieldValues,
  type FieldPath,
  useFormContext,
  Path,
} from "react-hook-form";
import { TextField, type TextFieldProps } from "../TextField";

type Props<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = TextFieldProps<TFieldValues, TName>;

export default function PasswordField<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({ name, rules, ...rest }: Props<TFieldValues, TName>) {
  const { getValues } = useFormContext<TFieldValues>();
  const baseRules = {
    required: `${
      name === "password" ? "Password is required" : "Please confirm your password"
    }`,
    ...(name === "password"
      ? {
        minLength: {
          value: 8,
          message: "Password must be at least 8 characters long",
        },
      }
      : {
        validate: (value: string) => value === getValues("password" as Path<TFieldValues>)
            || "Passwords do not match",
      }),
  };
  return (
    <TextField
      name={name}
      label={name === "password" ? "Password" : "Confirm Password"}
      placeholder="********"
      type="password"
      rules={{
        ...baseRules,
        ...rules,
      }}
      {...rest}
    />
  );
}
