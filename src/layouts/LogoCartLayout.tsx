import { Container } from "@mui/material";
import { Header } from "../components/Header/Header";

type Props = {
  children: React.ReactNode
};

export const LogoCartLayout = ({ children }: Props) => {
  return (
    <Container maxWidth="lg">
      <Header />
      {children}
    </Container>
  );
};
