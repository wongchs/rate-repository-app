import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../../graphql/mutations";
import { useNavigate } from "react-router-native";
import ReviewFormContainer from "./ReviewFormContainer";

const ReviewForm = () => {
  const [createReview] = useMutation(CREATE_REVIEW);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const { data } = await createReview({
        variables: {
          review: {
            ...values,
            rating: parseInt(values.rating),
          },
        },
      });

      if (data?.createReview) {
        navigate(`/repository/${data.createReview.repositoryId}`);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return <ReviewFormContainer onSubmit={onSubmit} />;
};

export default ReviewForm;
