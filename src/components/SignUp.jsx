import React from "react";
import { Formik } from "formik";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import * as yup from "yup";
import { useNavigate } from "react-router-native";
import theme from "../theme";
import useSignUp from "../hooks/useSignUp";

const styles = StyleSheet.create({
  container: { backgroundColor: "white", padding: 15 },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    padding: 10,
    marginBottom: 15,
    borderRadius: 4,
  },
  errorInput: {
    borderColor: "#d73a4a",
  },
  errorText: {
    color: "#d73a4a",
    marginBottom: 15,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: theme.fontWeights.bold,
  },
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, "Username must be at least 5 characters long")
    .max(30, "Username can be at most 30 characters long")
    .required("Username is required"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters long")
    .max(50, "Password can be at most 50 characters long")
    .required("Password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Password confirmation is required"),
});

const SignUp = () => {
  const [signUp] = useSignUp();

  const onSubmit = async (values) => {
    try {
      await signUp(values);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={{ username: "", password: "", passwordConfirmation: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <View style={styles.container}>
          <TextInput
            style={[
              styles.input,
              touched.username && errors.username && styles.errorInput,
            ]}
            placeholder="Username"
            onChangeText={handleChange("username")}
            value={values.username}
          />
          {touched.username && errors.username && (
            <Text style={styles.errorText}>{errors.username}</Text>
          )}

          <TextInput
            secureTextEntry
            style={[
              styles.input,
              touched.password && errors.password && styles.errorInput,
            ]}
            placeholder="Password"
            onChangeText={handleChange("password")}
            value={values.password}
          />
          {touched.password && errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}

          <TextInput
            secureTextEntry
            style={[
              styles.input,
              touched.passwordConfirmation &&
                errors.passwordConfirmation &&
                styles.errorInput,
            ]}
            placeholder="Confirm password"
            onChangeText={handleChange("passwordConfirmation")}
            value={values.passwordConfirmation}
          />
          {touched.passwordConfirmation && errors.passwordConfirmation && (
            <Text style={styles.errorText}>{errors.passwordConfirmation}</Text>
          )}

          <Pressable onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Sign up</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default SignUp;
