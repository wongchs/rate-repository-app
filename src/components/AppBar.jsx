import { View, StyleSheet, Text, ScrollView, Pressable } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import { Link } from "react-router-native";
import { useQuery, useApolloClient } from "@apollo/client";
import { ME } from "../graphql/queries";
import useAuthStorage from "../hooks/useAuthStorage";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    paddingBottom: 15,
    paddingHorizontal: 15,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  text: {
    color: "white",
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
  scrollView: {
    flexDirection: "row",
  },
});

const AppBarTab = ({ text, to, onPress }) => {
  if (onPress) {
    return (
      <Pressable onPress={onPress} style={styles.tab}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    );
  }

  return (
    <Link to={to}>
      <View style={styles.tab}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Link>
  );
};

const AppBar = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const { data } = useQuery(ME);

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text="Repositories" to="/" />
        {data?.me ? (
          <>
            <AppBarTab text="Create a review" to="/review" />
            <AppBarTab text="My reviews" to="/myreviews" />
            <AppBarTab text="Sign out" onPress={signOut} />
          </>
        ) : (
          <>
            <AppBarTab text="Sign in" to="/signin" />
            <AppBarTab text="Sign up" to="/signup" />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
