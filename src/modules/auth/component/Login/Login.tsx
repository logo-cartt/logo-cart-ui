/* eslint-disable no-console */
import { Grid, Typography } from "@mui/material";
import {
  FormProvider, SubmitHandler, useForm,
} from "react-hook-form";
import { useAppDispatch } from "../../../../store/hooks";
import { PrimaryButton } from "../../../../components/UI/PrimaryButton";
import { Heading } from "../../../../components/UI/Heading";
import { login } from "../../../../store/features/tokenSlice";
import { loginUser } from "../../../../store/features/userSlice";
import { token } from "../../../../data-mock/data";
import { UserLogin } from "../../../../types/types";
import { UserRepository, userRepository } from "../../../../data-mock/userMock";
import { UserForm } from "../../../../components/ConnectForm/UserForm";

export function Login() {
  const methods = useForm<UserLogin>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    handleSubmit, setError, formState: { errors },
  } = methods;
  const users: UserRepository = userRepository;
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<UserLogin> = async (data) => {
    const userExists = await users.getUserByEmail(
      data.email,
    );
    const passwordMatch = await users.getUserByEmailAndPassword(
      data.email,
      data.password,
    );
    if (!userExists) {
      setError("email", { type: "manual", message: "No user with such email is found" });
    } else if (!passwordMatch) {
      setError("password", { type: "manual", message: "Incorrect password" });
    } else {
      const updatedUserData = {
        email: data.email,
      };
      dispatch(loginUser(updatedUserData));
      dispatch(login(token));
      localStorage.setItem("user", JSON.stringify(updatedUserData));
      localStorage.setItem("token", token);
    }
  };

  return (
    <Grid container justifyContent="flex-start" alignItems="center" spacing={6}>
      <Grid item sm={8} lg={12}>
        <Heading align="left" padding="32px 0 0 0">
          Login
        </Heading>
      </Grid>

      <Grid item sm={5}>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <FormProvider {...methods}>

              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={6}>
                  <Grid item sm={12}>
                    <UserForm
                      name="email"
                      label="Email"
                      placeholder="email@gmail.com"
                      type="email"
                    />
                  </Grid>
                  <Grid item sm={12}>
                    <UserForm
                      name="password"
                      label="Password"
                      placeholder="********"
                      type="password"
                    />
                  </Grid>
                  {errors.email && (
                    <Typography color="red" paddingLeft="48px">{errors.email.message}</Typography>
                  )}
                  {errors.password && (
                    <Typography color="red" paddingLeft="48px">{errors.password.message}</Typography>
                  )}
                  <Grid item sm={12}>
                    <PrimaryButton>Submit</PrimaryButton>
                  </Grid>
                </Grid>
              </form>
            </FormProvider>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
