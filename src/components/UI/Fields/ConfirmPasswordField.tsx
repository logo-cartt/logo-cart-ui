import type { UseFormGetValues, FieldValues, Path } from "react-hook-form";
import { TextField } from "../TextField";

interface ConfirmPasswordFieldProps<TFieldValues extends FieldValues> {
  getValues: UseFormGetValues<TFieldValues>;
}

export default function ConfirmPasswordField<
  TFieldValues extends { password: string } & FieldValues,
>({ getValues }: ConfirmPasswordFieldProps<TFieldValues>) {
  return (
    <TextField
      name="confirmPassword"
      label="Confirm password"
      placeholder="********"
      type="password"
      rules={{
        required: "Please confirm your password",
        validate: (value) => value === getValues("password" as Path<TFieldValues>)
          || "Passwords do not match",
      }}
    />
  );
}
