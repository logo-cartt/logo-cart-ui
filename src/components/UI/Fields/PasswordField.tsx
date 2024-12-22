import { TextField } from "../TextField";

export default function PasswordField() {
  return (
    <TextField
      name="password"
      label="Password"
      placeholder="********"
      type="password"
      rules={{
        required: "Password is required",
        minLength: {
          value: 8,
          message: "Password must be at least 8 characters long",
        },
      }}
    />
  );
}
