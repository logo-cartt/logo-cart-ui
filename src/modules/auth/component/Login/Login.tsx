import { Grid } from "@mui/material";
import { SubmitHandler, useForm, DefaultValues } from "react-hook-form";
import { useAppDispatch } from "../../../../store/hooks";
import { PrimaryButton } from "../../../../components/UI/PrimaryButton";
import { TextField } from "../../../../components/UI/TextField";
import { Heading } from "../../../../components/UI/Heading";
import { login } from "../../../../store/features/tokenSlice";
import { loginUser } from "../../../../store/features/userSlice";
import { token } from "../../../../data-mock/data";
import { UserLogin } from "../../../../types/types";
import { UserRepository, userRepository } from "../../../../data-mock/userMock";

export type LoginForm = {
  email: string;
  password: string;
};
const defaultValues: DefaultValues<LoginForm> = {
  email: "",
  password: "",
};
export function Login() {
  const {
    control, setError, formState, reset, ...form
  } = useForm<LoginForm>({
    defaultValues,
  });

  const { errors } = formState;
  const users: UserRepository = userRepository;
  const dispatch = useAppDispatch();

  const handleSubmit: SubmitHandler<UserLogin> = async (data) => {
    const userExists = await users.getUserByEmail(data.email);
    if (!userExists) {
      setError("email", {
        type: "manual",
        message: "User with this email is not registered",
      });
      return;
    }

    const passwordMatch = await users.getUserByEmailAndPassword(
      data.email,
      data.password,
    );

    if (!passwordMatch) {
      setError("password", { type: "manual", message: "Incorrect password" });
      return;
    }
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
  };

  return (
    <Grid container={true} justifyContent="flex-start" alignItems="center" spacing={6}>
      <Grid item={true} sm={8} lg={12}>
        <Heading align="left" padding="32px 0 0 0">
          Login
        </Heading>
      </Grid>

      <Grid item={true} sm={5}>
        <Grid container={true} spacing={2}>
          <Grid item={true} sm={12}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <Grid container={true} spacing={6}>
                <Grid item={true} sm={12}>
                  <TextField
                    name="email"
                    control={control}
                    rules={{ required: "Email is required" }}
                    placeholder="email@gmail.com"
                    label="Email"
                    type="email"
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ""}
                  />
                </Grid>
                <Grid item={true} sm={12}>
                  <TextField
                    name="password"
                    control={control}
                    rules={{ required: "Password is required" }}
                    label="Password"
                    placeholder="********"
                    type="password"
                    error={!!errors.password}
                    helperText={errors.password ? errors.password.message : ""}
                  />
                </Grid>
                <Grid item={true} sm={12}>
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
