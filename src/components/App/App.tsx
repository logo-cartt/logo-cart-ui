import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { GlobalStyleWrapper } from "../GlobalStyleWrapper";
import { theme } from "../../theme";
import { MainPage } from "../../modules/main/page/MainPage";

export const App = () => {
  return (
    <>
      <CssBaseline />
      <GlobalStyleWrapper>
        <ThemeProvider theme={theme}>
          <MainPage />
        </ThemeProvider>
      </GlobalStyleWrapper>
    </>
  );
};
