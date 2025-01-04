import { View, FlatList, StyleSheet } from "react-native";
import { useParams } from "react-router-native";
import * as Linking from "expo-linking";
import { Text } from "react-native";

import RepositoryInfo from "./RepositoryInfo";
import ReviewItem from "./ReviewItem";
import useRepository from "../hooks/useRepository";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    borderRadius: 4,
    margin: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: theme.fontWeights.bold,
  },
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryView = () => {
  const { id } = useParams();
  const { repository, loading } = useRepository(id);

  if (loading || !repository) {
    return null;
  }

  const reviews = repository.reviews.edges.map((edge) => edge.node);

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default RepositoryView;
