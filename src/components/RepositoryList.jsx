import { FlatList, View, StyleSheet, Pressable } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import { useNavigate } from "react-router-native";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { useDebounce } from "use-debounce";
import { RepositoryListContainer } from "./RepositoryListContainer";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const navigate = useNavigate();
  const [selectedOrder, setSelectedOrder] = useState("latest");
  const [searchText, setSearchText] = useState("");
  const [debouncedSearchText] = useDebounce(searchText, 500);

  const getOrderVariables = (order) => {
    switch (order) {
      case "highest":
        return { orderBy: "RATING_AVERAGE", orderDirection: "DESC" };
      case "lowest":
        return { orderBy: "RATING_AVERAGE", orderDirection: "ASC" };
      default:
        return { orderBy: "CREATED_AT", orderDirection: "DESC" };
    }
  };

  const { orderBy, orderDirection } = getOrderVariables(selectedOrder);
  const { repositories } = useRepositories({
    orderBy,
    orderDirection,
    searchKeyword: debouncedSearchText,
  });

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const onRepositoryPress = (id) => {
    navigate(`/repository/${id}`);
  };

  return (
    <RepositoryListContainer
      selectedOrder={selectedOrder}
      setSelectedOrder={setSelectedOrder}
      searchText={searchText}
      setSearchText={setSearchText}
      repositoryNodes={repositoryNodes}
      onPressRepository={onRepositoryPress}
    />
  );
};

export default RepositoryList;
