import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../features/cabins/FormRow";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { register, formState, getValues, handleSubmit } = useForm();
  const { errors } = formState;
 function onSubmit (data){
  console.log(data)
 }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          {...register("fullName", {
            required: "This field is Required ",
          })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          id="email"
          {...register("email", {
            required: "This field is Required ",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please Provide a correct email",
            },
          })}
        />
      </FormRow>

      <FormRow label="Password (min 8 characters)" error={errors?.password?.message}>
        <Input
          type="password"
          id="password"
          {...register("password", {
            required: "This field is Required ",
            minLength: {
              value: 8,
              message: "the password should contain a minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "This field is Required ",
            validate: (value) =>
              value === getValues().password ||
              "passwoed confirmation is unmatched",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
