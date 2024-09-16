import "@mantine/core/styles.css";
import "./App.css";
import { Card, Container, createTheme, MantineProvider } from "@mantine/core";
import TabsContainer from "./components/tabsContainer";

const theme = createTheme({});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Container size={"lg"} miw={"50%"}>
        <Card shadow="sm" miw="100%" padding="lg" radius="md" withBorder>
          <TabsContainer />
        </Card>
      </Container>
    </MantineProvider>
  );
}

export default App;
