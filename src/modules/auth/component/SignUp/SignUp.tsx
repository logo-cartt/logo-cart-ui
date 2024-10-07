import {
  Grid,
  Typography,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { PrimaryButton } from "../../../../components/UI/PrimaryButton";
import { Heading } from "../../../../components/UI/Heading";
import { token } from "../../../../data-mock/data";
import { Profile } from "../../../../types/types";
import { useAppDispatch } from "../../../../store/hooks";
import { login } from "../../../../store/features/tokenSlice";
import { UserRepository, userRepository } from "../../../../data-mock/userMock";
import { UserForm } from "../../../../components/ConnectForm/UserForm";

export function SignUp() {
  const methods = useForm<Omit<Profile, "id">>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const {
    handleSubmit, setError, reset, formState: { errors },
  } = methods;
  const users: UserRepository = userRepository;
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Omit<Profile, "id">> = async (data) => {
    const userExists = await users.getUserByEmail(
      data.email,
    );

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
            <FormProvider {...methods}>

              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={6}>
                  <Grid item xs={12}>
                    <UserForm
                      name="email"
                      label="Email"
                      placeholder="email@gmail.com"
                      type="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <UserForm
                      name="name"
                      label="Seller name"
                      placeholder="Seller name"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <UserForm
                      name="password"
                      label="Password"
                      placeholder="********"
                      type="password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <UserForm
                      name="confirmPassword"
                      label="Confirm password"
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
            </FormProvider>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
