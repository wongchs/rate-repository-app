import { View, Pressable, StyleSheet } from "react-native";
import { useParams } from "react-router-native";
import * as Linking from 'expo-linking';
import { Text } from "react-native";

import RepositoryItem from "./RepositoryItem";
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
});

const RepositoryView = () => {
  const { id } = useParams();
  const { repository, loading } = useRepository(id);

  if (loading || !repository) {
    return null;
  }

  const openGitHub = () => {
    Linking.openURL(repository.url);
  };

  return (
    <View style={styles.container}>
      <RepositoryItem item={repository} />
      <Pressable style={styles.button} onPress={openGitHub}>
        <Text style={styles.buttonText}>Open in GitHub</Text>
      </Pressable>
    </View>
  );
};

export default RepositoryView;
