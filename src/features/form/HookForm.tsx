import { useForm, SubmitHandler } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

type Inputs = {
  name: string;
};

// creating a schema for strings
const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
});

export default function HookForm() {
  // UseForm needs to have same type as used in onSubmit function's data
  // so that handleSubmit knows about the type of passed onSubmit's data
  // https://stackoverflow.com/questions/71275687/type-of-handlesubmit-parameter-in-react-hook-form
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel htmlFor="name">First name</FormLabel>
        <Input id="name" placeholder="name" {...register("name")} />
        {errors.name?.message && <p>{errors.name?.message}</p>}
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
