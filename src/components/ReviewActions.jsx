import { View, StyleSheet, Pressable, Text, Alert } from "react-native";
import { useNavigate } from "react-router-native";
import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/mutations";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "white",
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    padding: 15,
    borderRadius: 4,
    alignItems: "center",
  },
  viewButton: {
    backgroundColor: theme.colors.primary,
  },
  deleteButton: {
    backgroundColor: "#d73a4a",
  },
  buttonText: {
    color: "white",
    fontWeight: theme.fontWeights.bold,
  },
});

const ReviewActions = ({ review, refetch }) => {
  const navigate = useNavigate();
  const [deleteReview] = useMutation(DELETE_REVIEW);

  const handleDelete = () => {
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: async () => {
            await deleteReview({ variables: { id: review.id } });
            refetch();
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, styles.viewButton]}
        onPress={() => navigate(`/repository/${review.repository.id}`)}
      >
        <Text style={styles.buttonText}>View repository</Text>
      </Pressable>
      <Pressable
        style={[styles.button, styles.deleteButton]}
        onPress={handleDelete}
      >
        <Text style={styles.buttonText}>Delete review</Text>
      </Pressable>
    </View>
  );
};

export default ReviewActions;
