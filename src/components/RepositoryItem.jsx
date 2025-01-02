import { View, Text, StyleSheet, Image } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#ffff",
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  header: {
    flexDirection: "row",
    paddingBottom: 20,
  },
  headerInfo: {
    marginLeft: 20,
    flex: 1,
    gap: 4,
  },
  boldedText: {
    fontWeight: theme.fontWeights.bold,
  },
  descriptionText: {
    color: theme.colors.textSecondary,
    flexWrap: "wrap",
  },
  languageTag: {
    backgroundColor: theme.colors.primary,
    padding: 3,
    borderRadius: 5,
    color: "white",
    textAlign: "center",
    alignSelf: "flex-start",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  statsItem: {
    alignItems: "center",
  },
  statsNumber: {
    fontWeight: "bold",
    marginBottom: 4,
  },
});

const formatCount = (count) => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count;
};

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={{ uri: item.ownerAvatarUrl }} />
        <View style={styles.headerInfo}>
          <Text style={styles.boldedText}>{item.fullName}</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
          <Text style={styles.languageTag}>{item.language}</Text>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statsItem}>
          <Text style={styles.statsNumber}>
            {formatCount(item.stargazersCount)}
          </Text>
          <Text style={styles.descriptionText}>Stars</Text>
        </View>
        <View style={styles.statsItem}>
          <Text style={styles.statsNumber}>{formatCount(item.forksCount)}</Text>
          <Text style={styles.descriptionText}>Forks</Text>
        </View>
        <View style={styles.statsItem}>
          <Text style={styles.statsNumber}>
            {formatCount(item.reviewCount)}
          </Text>
          <Text style={styles.descriptionText}>Reviews</Text>
        </View>
        <View style={styles.statsItem}>
          <Text style={styles.statsNumber}>{item.ratingAverage}</Text>
          <Text style={styles.descriptionText}>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
