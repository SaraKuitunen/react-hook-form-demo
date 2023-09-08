import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";

export default function HookForm() {
  const { handleSubmit, register } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <FormControl>
        <FormLabel htmlFor="name">First name</FormLabel>
        <Input id="name" placeholder="name" {...register("name")} />
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
