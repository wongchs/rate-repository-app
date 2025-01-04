import React from "react";
import RepositoryItem from "./RepositoryItem";
import { View, FlatList, Pressable, TextInput, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    margin: 10,
    padding: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  iconContainer: {
    padding: 5,
  },
});

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { selectedOrder, setSelectedOrder, searchText, setSearchText } =
      this.props;
    return (
      <View>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="gray" />
          <TextInput
            placeholder="Search repositories..."
            value={searchText}
            onChangeText={setSearchText}
            style={styles.searchInput}
          />
          {searchText ? (
            <Pressable
              onPress={() => setSearchText("")}
              style={styles.iconContainer}
            >
              <Ionicons name="close-circle" size={20} color="gray" />
            </Pressable>
          ) : null}
        </View>
        <Picker selectedValue={selectedOrder} onValueChange={setSelectedOrder}>
          <Picker.Item label="Latest repositories" value="latest" />
          <Picker.Item label="Highest rated repositories" value="highest" />
          <Picker.Item label="Lowest rated repositories" value="lowest" />
        </Picker>
      </View>
    );
  };

  render() {
    const { repositoryNodes, onPressRepository } = this.props;
    return (
      <FlatList
        ListHeaderComponent={this.renderHeader}
        data={repositoryNodes}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        renderItem={({ item }) => (
          <Pressable onPress={() => onPressRepository(item.id)}>
            <RepositoryItem item={item} />
          </Pressable>
        )}
      />
    );
  }
}
