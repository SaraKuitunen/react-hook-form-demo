import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import HookForm from "./features/form/HookForm";
import { ChakraProvider, Box } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <ChakraProvider>
        <Box p={4}>
          <HookForm />
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;
