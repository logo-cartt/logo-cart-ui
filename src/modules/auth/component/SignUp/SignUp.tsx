/* eslint-disable no-console */
import { Grid } from "@mui/material";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { SubmitHandler, useForm } from "react-hook-form";
import { PrimaryButton } from "../../../../components/UI/PrimaryButton";
import { TextField } from "../../../../components/UI/TextField";
import { Heading } from "../../../../components/UI/Heading";
import { token } from "../../../../data-mock/data";
import { Profile } from "../../../../types/types";
import { useAppDispatch } from "../../../../store/hooks";
import { login } from "../../../../store/features/tokenSlice";
import {
  User,
  UserRepository,
  userRepository,
} from "../../../../data-mock/userMock";

export function SignUp() {
  const {
    control, setError, formState, reset, getValues, ...form
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const { errors } = formState;
  const users: UserRepository = userRepository;
  const dispatch = useAppDispatch();

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("All Submitted Data:", users);
  }, [users]);

  const handleSubmit: SubmitHandler<Omit<Profile, "id">> = async (data) => {
    const userExists: User | null = await users.getUserByEmail(data.email);
    if (userExists) {
      setError("email", {
        type: "manual",
        message: "User with such email is already registered",
      });
      return;
    }
    const newFormData: Profile = {
      id: uuidv4(),
      ...data,
    };
    await users.addUser(newFormData);
    dispatch(login(token));
    localStorage.setItem("user", JSON.stringify({ email: newFormData.email }));
    localStorage.setItem("token", token);
    reset({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <Grid container={true} justifyContent="flex-start" alignItems="center" spacing={6}>
      <Grid item={true} sm={8} lg={12}>
        <Heading align="left" padding="32px 0 0 0">
          Sign up
        </Heading>
      </Grid>

      <Grid item={true} sm={5} lg={5}>
        <Grid container={true} spacing={2}>
          <Grid item={true} sm={12}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <Grid container={true} spacing={6}>
                <Grid item={true} xs={12}>
                  <TextField
                    control={control}
                    name="email"
                    rules={{
                      required: "Email is required",
                      pattern: /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                    }}
                    placeholder="email@gmail.com"
                    label="Email"
                    type="email"
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ""}
                  />
                </Grid>
                <Grid item={true} xs={12}>
                  <TextField
                    name="name"
                    control={control}
                    rules={{ required: "Name is required" }}
                    label="Seller name"
                    placeholder="Seller name"
                    type="text"
                    error={!!errors.name}
                    helperText={errors.name ? errors.name.message : ""}
                  />
                </Grid>
                <Grid item={true} xs={12}>
                  <TextField
                    name="password"
                    control={control}
                    rules={{
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long",
                      },
                    }}
                    label="Password"
                    placeholder="********"
                    type="password"
                    error={!!errors.password}
                    helperText={errors.password ? errors.password.message : ""}
                  />
                </Grid>
                <Grid item={true} xs={12}>
                  <TextField
                    name="confirmPassword"
                    control={control}
                    rules={{
                      required: "Please confirm your password",
                      validate: (value) => value === getValues("password")
                        || "Passwords do not match",
                    }}
                    label="Confirm password"
                    placeholder="********"
                    type="password"
                    error={!!errors.confirmPassword}
                    helperText={
                      errors.confirmPassword
                        ? errors.confirmPassword.message
                        : ""
                    }
                  />
                </Grid>
                <Grid item={true} xs={12}>
                  <PrimaryButton>Submit</PrimaryButton>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
