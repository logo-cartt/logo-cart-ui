import { Box, Container } from '@mui/material';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Header } from './components/Header/Header';
import { Ads } from './components/Ads/Ads';

// Define your primary and secondary colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#000', // Set your primary color here
    },
    secondary: {
      main: '#c039ff', // Set your secondary color here
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Box>
          <Header />
          <Ads />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
