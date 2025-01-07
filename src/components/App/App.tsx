import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router";
import { theme } from "../../theme";
import { GlobalStyleWrapper } from "../GlobalStyleWrapper";
import { SearchPage } from "../../modules/search/page/SearchPage";
import { MainPage } from "../../modules/main/page/MainPage";
import { ProductDetailPage } from "../../modules/product/page/ProductDetailPage";
import { LoginPage } from "../../modules/auth/page/LoginPage";
import { SignUpPage } from "../../modules/auth/page/SignUpPage";
import { CartPage } from "../../modules/cart/page/CartPage";

export function App() {
  return (
    <>
      <CssBaseline />
      <GlobalStyleWrapper>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route index={true} element={<MainPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="signup" element={<SignUpPage />} />
              <Route path="productdetail" element={<ProductDetailPage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="search" element={<SearchPage />} />
            </Routes>

            {/* <MainPage /> */}
            {/* <LoginPage /> */}
            {/* <ProductDetailPage /> */}
            {/* <CartPage /> */}
            {/* <SignUpPage /> */}
            {/* <SearchPage /> */}
          </BrowserRouter>
        </ThemeProvider>
      </GlobalStyleWrapper>
    </>
  );
}
