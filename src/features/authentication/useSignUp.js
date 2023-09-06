import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useSignUp() {
  const navigate = useNavigate()
  const { mutate: signUp, isLoading: isSigningUp } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success('Account created Successfully ,please verify your account using email adress')
      // navigate('/', { replace: true })
    }
  })
  return { signUp, isSigningUp }
}