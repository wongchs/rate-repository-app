import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (id) => {
  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: { id },
  });

  return {
    repository: data?.repository,
    loading,
    error,
  };
};

export default useRepository;
