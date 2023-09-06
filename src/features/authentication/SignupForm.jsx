import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../features/cabins/FormRow";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import useSignUp from "./useSignUp";
import SpinnerMini from "../../ui/SpinnerMini";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { signUp, isSigningUp } = useSignUp();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  function onSubmit({ fullName, email, password }) {
    signUp({ fullName, email, password }, { onSettled: () => reset() });
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          disabled={isSigningUp}
          type="text"
          id="fullName"
          {...register("fullName", {
            required: "This field is Required ",
          })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          disabled={isSigningUp}
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

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          disabled={isSigningUp}
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
          disabled={isSigningUp}
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
        <Button>{!isSigningUp ? "Create new user" : <SpinnerMini />}</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
