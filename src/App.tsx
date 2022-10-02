import styled from "styled-components";

import { ThemeProvider } from "src/styled-components";
import { Button } from "src/components/Button";
import { TomatoButton } from "src/components/TomatoButton";
import { Link } from "src/components/Link";
import { StyledLink } from "src/components/StyledLink";
import { Input } from "src/components/Input";
import { Rotate } from "src/components/Rotate";
import { ColorSchemeToggle } from "./components/ColorSchemeToggle";

const Container = styled.div`
  margin: 0 auto;
  padding: 1rem;
  max-width: 800px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;

  @media (min-width: 800px) {
    font-size: 2.5rem;
  }
`;

const Box = styled.div`
  margin: 1rem 0;
`;

function App() {
  return (
    <ThemeProvider>
      <Container>
        <Header>
          <Title>Styled Components</Title>
          <ColorSchemeToggle on={"Light"} off={"Dark"} />
        </Header>

        <Box>
          <Button>Normal</Button>
        </Box>

        <Box>
          <Button primary>Primary</Button>
        </Box>

        <Box>
          <TomatoButton>Tomato</TomatoButton>
        </Box>

        <Box>
          <Button as="a" href="#">
            Link with Button
          </Button>
        </Box>

        <Box>
          <TomatoButton as="a" href="#">
            Link with Tomato Button
          </TomatoButton>
        </Box>

        <Box>
          <Link href="#">Unstyled, boring Link</Link>
        </Box>

        <Box>
          <StyledLink href="#">Styled, exciting Link</StyledLink>
        </Box>

        <Box>
          <Input defaultValue="@probablyup" type="text" />
        </Box>

        <Box>
          <Input
            defaultValue="@geelen"
            type="text"
            inputColor="rebeccapurple"
          />
        </Box>

        <Box>
          <Rotate>&lt; 💅🏾 &gt;</Rotate>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
