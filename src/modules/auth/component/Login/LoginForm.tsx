import { Controller } from "react-hook-form";
import { Grid } from "@mui/material";
import { TextField } from "../../../../components/UI/TextField";
import { ConnectForm } from "../../../../components/ConnectForm/ConnectForm";

interface ILoginForm {
  name: string,
  label: string,
  placeholder: string,
  type: string,
}

export function LoginForm({
  name, label, placeholder, type,
}: ILoginForm) {
  // const { control, formState: { errors } } = useFormContext();

  return (
    <Grid container spacing={6}>
      <ConnectForm>
        {({ control }) => (
          <Grid item sm={12}>
            <Controller
              name={name}
              control={control}
              render={({ field }) => (
                <TextField
                  label={label}
                  placeholder={placeholder}
                  type={type}
                  size="small"
                  fullWidth
                  {...field}
                />
              )}
            />
          </Grid>
        )}
      </ConnectForm>
    </Grid>
  );
}
