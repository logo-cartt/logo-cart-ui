import { Box, Container } from "@mui/material";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Header } from "./components/Header/Header";
import { Ads } from "./components/Ads/Ads";
import { Categories } from "./components/Categories/Categories";

declare module "@mui/material/styles" {
  interface Palette {
    violet: Palette["primary"];
  }

  interface PaletteOptions {
    violet?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    violet: true;
  }
}
// Define your primary and secondary colors
const theme = createTheme({
  palette: {
    primary: { main: "#000" },
    secondary: { main: "#c039ff" },
    violet: { main: "#7C27F7" },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Box>
          <Header />
          <Ads />
          <Categories />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
