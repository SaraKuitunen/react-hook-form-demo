import HookForm from "./features/form/HookForm";
import HookFormChakraEx from "./features/form/HookFormChakraEx";
import { ChakraProvider, Box } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="pt-1 pb-1">Vite + React + Chakra UI + Zod</h1>
      <ChakraProvider>
        <Box p={2}>
          <HookForm />
        </Box>
        <Box p={2}>
          <p className="pt-1">
            Example from{" "}
            <a href="https://chakra-ui.com/getting-started/with-hook-form">
              Chakra documentation
            </a>{" "}
            which has issues because is actually JavaScript.
          </p>
          <HookFormChakraEx />
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;
