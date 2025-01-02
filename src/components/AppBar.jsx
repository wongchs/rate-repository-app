import { View, StyleSheet, Pressable, Text } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    paddingBottom: 15,
    paddingHorizontal: 15,
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

const AppBarTab = ({ text }) => {
  return (
    <Pressable style={styles.tab}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab text="Repositories" />
    </View>
  );
};

export default AppBar;
