import { FC } from "react";
import { Container } from "@components/ui";

const Navbar: FC = () => {
  return (
    <Container>
      <div className="flex flex-row md:py-6">
        <h1>NavBar</h1>
      </div>
    </Container>
  );
};

export default Navbar;
