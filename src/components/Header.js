import { StyledHeader, Nav, Logo, Image } from "./Header.styled";
import { Container } from "./Container.styled";
import { Button } from "./Button.styled";
import { Flex } from "./Flex.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button>Try it Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build the community</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <Button bg="#ff0099" color="#fff">
              Get Started for Free
            </Button>
          </div>
          <Image src="./images/illustration-mockups.svg" alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}
