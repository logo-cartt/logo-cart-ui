/* eslint-disable no-console */
import {
  Grid,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { PrimaryButton } from "../../../../components/UI/PrimaryButton";
import { TextField } from "../../../../components/UI/TextField";
import { Heading } from "../../../../components/UI/Heading";
import { token } from "../../../../data-mock/data";
import { Profile } from "../../../../types/types";
import { useAppDispatch } from "../../../../store/hooks";
import { login } from "../../../../store/features/tokenSlice";
import { User, UserRepository, userRepository } from "../../../../data-mock/userMock";

export function SignUp() {
  const {
    control, setError, handleSubmit, formState: { errors }, reset, getValues,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const users: UserRepository = userRepository;
  const dispatch = useAppDispatch();

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("All Submitted Data:", users);
  }, [users]);

  const onSubmit: SubmitHandler<Omit<Profile, "id">> = async (data) => {
    const userExists: User | null = await users.getUserByEmail(data.email);
    if (userExists) {
      setError("email", { type: "manual", message: "User with such email is already registered" });
    } else {
      const newFormData: Profile = {
        id: uuidv4(),
        ...data,
      };
      await users.addUser(newFormData);
      dispatch(login(token));
      localStorage.setItem("user", JSON.stringify({ email: newFormData.email }));
      localStorage.setItem("token", token);
      reset(
        {
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        },
      );
    }
  };

  return (
    <Grid
      container
      justifyContent="flex-start"
      alignItems="center"
      spacing={6}
    >
      <Grid item sm={8} lg={12}>
        <Heading align="left" padding="32px 0 0 0">Sign up</Heading>
      </Grid>

      <Grid
        item
        sm={5}
        lg={5}
      >
        <Grid container spacing={2}>
          <Grid item sm={12}>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  <Controller
                    name="email"
                    control={control}
                    rules={{ required: "Email is required", pattern: /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/ }}
                    render={({ field }) => (
                      <TextField
                        label="Email"
                        placeholder="email@gmail.com"
                        type="email"
                        {...field}
                      />
                    )}
                  />

                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="name"
                    control={control}
                    rules={{ required: "Name is required" }}
                    render={({ field }) => (
                      <TextField
                        label="Seller name"
                        placeholder="Seller name"
                        type="text"
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="password"
                    control={control}
                    rules={{ required: "Password is required", minLength: { value: 8, message: "Password must be at least 8 characters long" } }}
                    render={({ field }) => (
                      <TextField
                        label="Password"
                        placeholder="********"
                        type="password"
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="confirmPassword"
                    control={control}
                    rules={{ required: "Please confirm your password", validate: (value) => value === getValues("password") || "Passwords do not match" }}
                    render={({ field }) => (
                      <TextField
                        label="Confirm password"
                        placeholder="********"
                        type="password"
                        {...field}
                      />
                    )}
                  />
                </Grid>
                {errors.email && (
                <Typography color="red" paddingLeft="48px">{errors.email.message}</Typography>
                )}
                {errors.name && (
                <Typography color="red" paddingLeft="48px">{errors.name.message}</Typography>
                )}
                {errors.password && (
                <Typography color="red" paddingLeft="48px">{errors.password.message}</Typography>
                )}
                {errors.confirmPassword && (
                <Typography color="red" paddingLeft="48px">{errors.confirmPassword.message}</Typography>
                )}
                <Grid item xs={12}>
                  <PrimaryButton>
                    Submit
                  </PrimaryButton>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
