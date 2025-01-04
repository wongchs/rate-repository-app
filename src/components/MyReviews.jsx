import { FlatList, View, StyleSheet } from "react-native";
import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";
import ReviewItem from "./ReviewItem";
import useMyReviews from "../hooks/useMyReviews";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {
  const { reviews, loading } = useMyReviews();

  if (loading) {
    return null;
  }

  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <ReviewItem review={item} showRepository={true} />
      )}
      keyExtractor={({ id }) => id}
    />
  );
};

export default MyReviews;
