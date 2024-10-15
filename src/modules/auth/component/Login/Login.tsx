import {
  Grid,
  Typography,
} from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../../../store/hooks";
import { PrimaryButton } from "../../../../components/UI/PrimaryButton";
import { TextField } from "../../../../components/UI/TextField";
import { Heading } from "../../../../components/UI/Heading";
import { login } from "../../../../store/features/tokenSlice";
import { loginUser } from "../../../../store/features/userSlice";
import { token } from "../../../../data-mock/data";
import { UserLogin } from "../../../../types/types";
import { UserRepository, userRepository } from "../../../../data-mock/userMock";

export function Login() {
  const {
    control, setError, handleSubmit, formState: { errors }, reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const users: UserRepository = userRepository;
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<UserLogin> = async (data) => {
    const userExists = await users.getUserByEmail(data.email);
    const passwordMatch = await users.getUserByEmailAndPassword(data.email, data.password);
    if (!userExists) {
      setError("email", { type: "manual", message: "User with this email is not registered" });
    } else if (userExists && !passwordMatch) {
      setError("password", { type: "manual", message: "Incorrect password" });
    } else {
      const updatedUserData = {
        email: data.email,
      };
      dispatch(loginUser(updatedUserData));
      dispatch(login(token));
      localStorage.setItem("user", JSON.stringify(updatedUserData));
      localStorage.setItem("token", token);

      reset({
        email: "",
        password: "",
      });
      // eslint-disable-next-line no-console
      console.log("Login successful");
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
        <Heading align="left" padding="32px 0 0 0">Login</Heading>
      </Grid>

      <Grid
        item
        sm={5}
      >
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={6}>
                <Grid item sm={12}>
                  <Controller
                    name="email"
                    control={control}
                    rules={{ required: "Email is required" }}
                    render={({ field }) => (
                      <TextField
                        label="Email"
                        placeholder="email@gmail.com"
                        type="email"
                        size="small"
                        fullWidth
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid item sm={12}>
                  <Controller
                    name="password"
                    control={control}
                    rules={{ required: "Password is required" }}
                    render={({ field }) => (
                      <TextField
                        label="Password"
                        placeholder="********"
                        type="password"
                        size="small"
                        fullWidth
                        {...field}
                      />
                    )}
                  />

                </Grid>
                {errors.email && (
                <Typography color="red" paddingLeft="48px">{errors.email.message}</Typography>
                )}
                {errors.password && (
                <Typography color="red" paddingLeft="48px">{errors.password.message}</Typography>
                )}
                <Grid item sm={12}>
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
