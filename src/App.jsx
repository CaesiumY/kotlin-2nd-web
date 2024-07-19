import { MantineProvider } from "@mantine/core";
import TodoPage from "./pages/TodoPage";

import "@mantine/core/styles.css";

const App = () => {
  return (
    <MantineProvider>
      <TodoPage />
    </MantineProvider>
  );
};

export default App;
