// import type {
//   FieldValues,
//   Path,
//   FieldPath,
// } from "react-hook-form";
// import { TextField, type TextFieldProps } from "../TextField";

// type Props<
//   TFieldValues extends FieldValues,
//   TName extends FieldPath<TFieldValues>,
// > = TextFieldProps<TFieldValues, TName>;
// // interface ConfirmPasswordFieldProps<TFieldValues extends FieldValues> {
// //   getValues: UseFormGetValues<TFieldValues>;
// // }

// export default function ConfirmPasswordField<
//   TFieldValues extends FieldValues,
//   TName extends FieldPath<TFieldValues>,
// >({ getValues }: Props<TFieldValues, TName>) {
//   return (
//     <TextField
//       name="confirmPassword"
//       label="Confirm password"
//       placeholder="********"
//       type="password"
//       rules={{
//         required: "Please confirm your password",
//         validate: (value) => value === getValues("password" as Path<TFieldValues>)
//           || "Passwords do not match",
//       }}
//     />
//   );
// }
