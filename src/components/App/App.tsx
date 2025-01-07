import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../theme";
import { GlobalStyleWrapper } from "../GlobalStyleWrapper";
import { ProductDetailPage } from "../../modules/product/page/ProductDetailPage";
// import { LoginPage } from "../../modules/auth/page/LoginPage";
// import { SignUpPage } from "../../modules/auth/page/SignUpPage";
// import { CartPage } from "../../modules/cart/page/CartPage";
// import { MainPage } from "../../modules/main/page/MainPage";

export function App() {
  return (
    <>
      <CssBaseline />
      <GlobalStyleWrapper>
        <ThemeProvider theme={theme}>
          {/* <MainPage /> */}
          {/* <LoginPage /> */}
          <ProductDetailPage />
          {/* <CartPage /> */}
          {/* <SignUpPage /> */}
        </ThemeProvider>
      </GlobalStyleWrapper>
    </>
  );
}
