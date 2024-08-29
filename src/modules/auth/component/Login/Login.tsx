import {
  Grid,
} from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { PrimaryButton } from "../../../../components/UI/PrimaryButton";
import { TextField } from "../../../../components/UI/TextField";
import { Heading } from "../../../../components/UI/Heading";
import { login } from "../../../../store/features/tokenSlice";
import { loginUser } from "../../../../store/features/userSlice";
import { token } from "../../../../data/data";
import { UserLogin } from "../../../../types/types";

export const Login = () => {
  const [userData, setUserData] = useState<UserLogin>({
    email: "",
    password: "",
    isLoggedIn: false,
  });
  const [error, setError] = useState<string>("");

  // const { email, password } = useAppSelector((state) => state.user);
  const { profiles } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setUserData((prevUserData: UserLogin) => ({
        ...prevUserData,
        email: value,
      }));
    } else if (name === "password") {
      setUserData((prevUserData: UserLogin) => ({
        ...prevUserData,
        password: value,
      }));
    }
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userExists = profiles.find((profile) => userData.email === profile.email
    && userData.password === profile.password);
    if (userExists) {
      const updatedUserData = {
        ...userData,
        isLoggedIn: true,
      };
      setUserData(updatedUserData);
      setError("");
      dispatch(loginUser(updatedUserData));
      dispatch(login(token));
      localStorage.setItem("user", JSON.stringify(updatedUserData));
      localStorage.setItem("token", token);

      setUserData((prevUserData: UserLogin) => ({
        ...prevUserData,
        email: "",
        password: "",
      }));
      // eslint-disable-next-line no-console
      console.log("Login successful");
    } else {
      setError("Invalid email or password");
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

            <form onSubmit={handleSubmit}>
              <Grid container spacing={6}>
                <Grid item sm={12}>
                  <TextField
                    label="Email"
                    placeholder="email@gmail.com"
                    name="email"
                    type="email"
                    size="small"
                    fullWidth
                    value={userData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item sm={12}>
                  <TextField
                    label="Password"
                    placeholder="********"
                    name="password"
                    type="password"
                    size="small"
                    fullWidth
                    value={userData.password}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item sm={12}>
                  <PrimaryButton>
                    Submit
                  </PrimaryButton>
                </Grid>
              </Grid>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
