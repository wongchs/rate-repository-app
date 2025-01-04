import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";

const useMyReviews = () => {
  const { data, loading, refetch } = useQuery(ME, {
    variables: { includeReviews: true },
    fetchPolicy: "cache-and-network",
  });

  return {
    reviews: data?.me?.reviews?.edges?.map((edge) => edge.node) ?? [],
    loading,
    refetch,
  };
};

export default useMyReviews;
