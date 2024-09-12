import {
  Grid,
} from "@mui/material";
import {
  ChangeEvent, FormEvent, useEffect, useState,
} from "react";
import { v4 as uuidv4 } from "uuid";
import { PrimaryButton } from "../../../../components/UI/PrimaryButton";
import { TextField } from "../../../../components/UI/TextField";
import { Heading } from "../../../../components/UI/Heading";
import { profileData, token } from "../../../../data-mock/data";
import { Profile } from "../../../../types/types";
import { useAppDispatch } from "../../../../store/hooks";
import { login } from "../../../../store/features/tokenSlice";
import { UserRepository, userRepository } from "../../../../data-mock/userMock";

export function SignUp() {
  const [formData, setFormData] = useState<Omit<Profile, "id" | "isLoggedIn">>(
    profileData,
  );
  const users: UserRepository = userRepository;
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("All Submitted Data:", users);
  }, [users]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newFormData: Profile = {
      id: uuidv4(),
      ...formData,
    };

    await users.addUser(newFormData);
    dispatch(login(token));
    localStorage.setItem("user", JSON.stringify({ email: newFormData.email }));
    localStorage.setItem("token", token);
    setFormData(
      {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    );
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

            <form onSubmit={handleSubmit}>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    placeholder="email@gmail.com"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Seller name"
                    placeholder="Seller name"
                    type="text"
                    size="small"
                    fullWidth
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Password"
                    placeholder="********"
                    type="password"
                    size="small"
                    fullWidth
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Confirm password"
                    placeholder="********"
                    type="password"
                    size="small"
                    fullWidth
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </Grid>
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
