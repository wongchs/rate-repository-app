import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";
import { format } from "date-fns";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
    flexDirection: "row",
  },
  ratingContainer: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  ratingText: {
    color: theme.colors.primary,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
  contentContainer: {
    flex: 1,
  },
  headerText: {
    fontWeight: theme.fontWeights.bold,
    marginBottom: 5,
  },
  dateText: {
    color: theme.colors.textSecondary,
    marginBottom: 5,
  },
  reviewText: {
    flexWrap: "wrap",
  },
});

const ReviewItem = ({ review }) => {
  const formattedDate = format(new Date(review.createdAt), "dd.MM.yyyy");

  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>{review.rating}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>{review.user.username}</Text>
        <Text style={styles.dateText}>{formattedDate}</Text>
        <Text style={styles.reviewText}>{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
