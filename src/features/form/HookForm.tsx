import { useForm, SubmitHandler } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";

type Inputs = {
  name: string;
};

export default function HookForm() {
  // UseForm needs to have same type as used in onSubmit function's data
  // so that handleSubmit knows about the type of passed onSubmit's data
  // https://stackoverflow.com/questions/71275687/type-of-handlesubmit-parameter-in-react-hook-form
  const { handleSubmit, register } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
