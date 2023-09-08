import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";

export default function HookForm() {
  return (
    <form>
      <FormControl>
        <FormLabel htmlFor="name">First name</FormLabel>
        <Input id="name" placeholder="name" />
        <FormErrorMessage>
          <p> error placeholder</p>
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </form>
  );
}
