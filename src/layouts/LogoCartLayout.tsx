import { Container } from "@mui/material";
import { Header } from "../components/Header/Header";

type Props = {
  children: React.ReactNode
};

export function LogoCartLayout({ children }: Props) {
  return (
    <Container disableGutters={true} sx={{ width: "1110px" }}>
      <Header />
      {children}
    </Container>
  );
}
