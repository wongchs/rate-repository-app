import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-native";
import { CREATE_USER } from "../graphql/mutations";
import useSignIn from "./useSignIn";

const useSignUp = () => {
  const navigate = useNavigate();
  const [createUser] = useMutation(CREATE_USER);
  const [signIn] = useSignIn();

  const signUp = async ({ username, password }) => {
    await createUser({ variables: { user: { username, password } } });
    await signIn({ username, password });
    navigate("/");
  };

  return [signUp];
};

export default useSignUp;
