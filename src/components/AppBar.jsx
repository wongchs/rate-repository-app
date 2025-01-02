import { View, StyleSheet, Pressable, Text } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    paddingBottom: 15,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  tab: {
    paddingVertical: 10,
  },
  text: {
    color: "white",
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBarTab = ({ text, to }) => {
  return (
    <Link to={to}>
      <View style={styles.tab}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab text="Repositories" to="/" />
      <AppBarTab text="Sign in" to="/signin" />
    </View>
  );
};

export default AppBar;
