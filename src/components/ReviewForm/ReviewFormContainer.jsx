import { View, StyleSheet, Pressable, Text, TextInput } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    padding: 10,
    marginBottom: 15,
    borderRadius: 4,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: "top",
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
  ownerName: yup.string().required("Repository owner's username is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number()
    .required("Rating is required")
    .min(0, "Rating must be at least 0")
    .max(100, "Rating must be at most 100"),
  text: yup.string(),
});

const ReviewFormContainer = ({ onSubmit }) => {
  const initialValues = {
    ownerName: "",
    repositoryName: "",
    rating: "",
    text: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <View style={styles.container}>
          <TextInput
            style={[
              styles.input,
              touched.ownerName && errors.ownerName && styles.errorInput,
            ]}
            placeholder="Repository owner name"
            value={values.ownerName}
            onChangeText={handleChange("ownerName")}
          />
          {touched.ownerName && errors.ownerName && (
            <Text style={styles.errorText}>{errors.ownerName}</Text>
          )}

          <TextInput
            style={[
              styles.input,
              touched.repositoryName &&
                errors.repositoryName &&
                styles.errorInput,
            ]}
            placeholder="Repository name"
            value={values.repositoryName}
            onChangeText={handleChange("repositoryName")}
          />
          {touched.repositoryName && errors.repositoryName && (
            <Text style={styles.errorText}>{errors.repositoryName}</Text>
          )}

          <TextInput
            style={[
              styles.input,
              touched.rating && errors.rating && styles.errorInput,
            ]}
            placeholder="Rating (0-100)"
            value={values.rating}
            onChangeText={handleChange("rating")}
            keyboardType="numeric"
          />
          {touched.rating && errors.rating && (
            <Text style={styles.errorText}>{errors.rating}</Text>
          )}

          <TextInput
            style={[
              styles.input,
              styles.multilineInput,
              touched.text && errors.text && styles.errorInput,
            ]}
            placeholder="Review"
            value={values.text}
            onChangeText={handleChange("text")}
            multiline
          />
          {touched.text && errors.text && (
            <Text style={styles.errorText}>{errors.text}</Text>
          )}

          <Pressable onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Create review</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default ReviewFormContainer;
