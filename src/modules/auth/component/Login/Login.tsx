import { Grid } from "@mui/material";
import {
  SubmitHandler,
  useForm,
  DefaultValues,
  FormProvider,
} from "react-hook-form";
import { useAppDispatch } from "../../../../store/hooks";
import { PrimaryButton } from "../../../../components/UI/PrimaryButton";
import { Heading } from "../../../../components/UI/Heading";
import { login } from "../../../../store/features/tokenSlice";
import { loginUser } from "../../../../store/features/userSlice";
import { token } from "../../../../data-mock/data";
import { UserLogin } from "../../../../types/types";
import { UserRepository, userRepository } from "../../../../data-mock/userMock";
import EmailField from "../../../../components/UI/Fields/EmailField";
import PasswordField from "../../../../components/UI/Fields/PasswordField";

export type LoginForm = {
  email: string;
  password: string;
};
const defaultValues: DefaultValues<LoginForm> = {
  email: "",
  password: "",
};
export function Login() {
  const methods = useForm<LoginForm>({
    defaultValues,
  });
  const {
    setError, reset, ...form
  } = methods;
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
    <Grid
      container={true}
      justifyContent="flex-start"
      alignItems="center"
      spacing={6}
    >
      <Grid item={true} sm={8} lg={12}>
        <Heading align="left" padding="32px 0 0 0">
          Login
        </Heading>
      </Grid>

      <Grid item={true} sm={5}>
        <Grid container={true} spacing={2}>
          <Grid item={true} sm={12}>
            {" "}
            <FormProvider {...methods}>
              <form onSubmit={form.handleSubmit(handleSubmit)}>
                <Grid container={true} spacing={6}>
                  <Grid item={true} sm={12}>
                    <EmailField />
                  </Grid>
                  <Grid item={true} sm={12}>
                    <PasswordField name="password" />
                  </Grid>
                  <Grid item={true} sm={12}>
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
