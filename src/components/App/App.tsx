import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../theme";
import { GlobalStyleWrapper } from "../GlobalStyleWrapper";
// import { LoginPage } from "../../modules/auth/page/LoginPage";
import { SignUpPage } from "../../modules/auth/page/SignUpPage";
// import { MainPage } from "../../modules/main/page/MainPage";

export const App = () => {
  return (
    <>
      <CssBaseline />
      <GlobalStyleWrapper>
        <ThemeProvider theme={theme}>
          {/* <MainPage /> */}
          {/* <LoginPage /> */}
          <SignUpPage />
        </ThemeProvider>
      </GlobalStyleWrapper>
    </>
  );
};
