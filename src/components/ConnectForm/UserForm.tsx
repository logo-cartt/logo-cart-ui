import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "../UI/TextField";
import { ConnectForm } from "./ConnectForm";

interface IUserForm {
  name: string,
  label: string,
  placeholder: string,
  type: string,
}

export function UserForm({
  name, label, placeholder, type,
}: IUserForm) {
  const { getValues } = useFormContext();
  return (
    <ConnectForm>
      {({ control }) => (
        <Controller
          name={name}
          control={control}
          rules={{
            required: `${label} is required`,
            minLength: name === "password" ? {
              value: 8,
              message: "Password must be at least 8 characters long",
            } : undefined,
            validate: name === "confirmPassword" ? (value) => value === getValues("password") || "Passwords do not match" : undefined,

          }}
          render={({ field }) => (
            <TextField
              label={label}
              placeholder={placeholder}
              type={type}
              size="small"
              fullWidth
              {...field}
            />
          )}
        />
      )}
    </ConnectForm>
  );
}
