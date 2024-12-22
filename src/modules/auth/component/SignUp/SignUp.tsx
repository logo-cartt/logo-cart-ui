/* eslint-disable no-console */
import { Grid } from "@mui/material";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { PrimaryButton } from "../../../../components/UI/PrimaryButton";
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
import EmailField from "../../../../components/UI/Fields/EmailField";
import PasswordField from "../../../../components/UI/Fields/PasswordField";
// import ConfirmPasswordField from "../../../../components/UI/Fields/ConfirmPasswordField";
import NameField from "../../../../components/UI/Fields/NameField";

export function SignUp() {
  const methods = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const {
    setError, reset, getValues, ...form
  } = methods;
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
    <Grid
      container={true}
      justifyContent="flex-start"
      alignItems="center"
      spacing={6}
    >
      <Grid item={true} sm={8} lg={12}>
        <Heading align="left" padding="32px 0 0 0">
          Sign up
        </Heading>
      </Grid>

      <Grid item={true} sm={5} lg={5}>
        <Grid container={true} spacing={2}>
          <Grid item={true} sm={12}>
            <FormProvider {...methods}>
              <form onSubmit={form.handleSubmit(handleSubmit)}>
                <Grid container={true} spacing={6}>
                  <Grid item={true} xs={12}>
                    <EmailField />
                  </Grid>
                  <Grid item={true} xs={12}>
                    <NameField />
                  </Grid>
                  <Grid item={true} xs={12}>
                    <PasswordField name="password" />
                  </Grid>
                  <Grid item={true} xs={12}>
                    <PasswordField name="confirmPassword" />
                  </Grid>
                  <Grid item={true} xs={12}>
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
