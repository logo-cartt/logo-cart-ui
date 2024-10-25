import { TextField } from "../TextField";

export default function NameField() {
  return (
    <TextField
      name="name"
      label="Seller name"
      placeholder="Seller name"
      type="text"
      rules={{ required: "Name is required" }}
    />
  );
}
