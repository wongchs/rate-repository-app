import { Text } from "react-native";
import SignInForm from "./SignInForm";

const SignIn = () => {
  const onSubmit = (values) => {
    console.log("Form values:", values);
  };

  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;
