import {
  Grid,
} from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { PrimaryButton } from "../../../../components/UI/PrimaryButton";
import { TextField } from "../../../../components/UI/TextField";
import { Heading } from "../../../../components/UI/Heading";
import { profilesData } from "../../../../data/data";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = profilesData.find((profile) => email === profile.email
    && password === profile.password);
    if (user) {
      setError("");
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
                    value={email}
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
                    value={password}
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
