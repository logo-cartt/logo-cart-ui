import { TextField } from "../TextField";

export default function EmailField() {
  return (
    <TextField
      name="email"
      label="Email"
      placeholder="email@gmail.com"
      type="email"
      rules={{
        required: "Email is required",
        pattern: /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
      }}
    />
  );
}
