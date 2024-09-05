import { Container } from "@mui/material";
import { Header } from "../components/Header/Header";

type Props = {
  children: React.ReactNode
};

export function LogoCartLayout({ children }: Props) {
  return (
    <Container sx={{ width: "1100px" }}>
      <Header />
      {children}
    </Container>
  );
}
