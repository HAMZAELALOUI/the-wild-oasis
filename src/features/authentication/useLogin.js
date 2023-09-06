import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";


export function useLogin() {
  const queryClient = useQueryClient()

  const navigate = useNavigate()
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      navigate('/')
      toast.success('Logedin Successfully ')
    },
    onError: (err) => {
      toast.error('email or password provided are incorrect')  //error
    }


  })
  return { login, isLoading }
}