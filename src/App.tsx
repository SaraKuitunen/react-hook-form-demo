import HookForm from "./features/form/HookForm";
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
      </ChakraProvider>
    </>
  );
}

export default App;
