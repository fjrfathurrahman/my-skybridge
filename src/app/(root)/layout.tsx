import { Footer } from "@/components/fragments/Footer";
import { Container } from "@/components/layouts/Container";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Container>{children}</Container>
      <Footer/>
    </>
  );
}
