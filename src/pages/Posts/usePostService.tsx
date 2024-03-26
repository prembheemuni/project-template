import { useReactQuery } from "../../hooks/useReactQuery";
import Axios from "../../services/apiClient";
import { postConstants } from "../../constants/constants";

const usePostService = () => {
  const allPostQueryKey = "Post";

  const { useGetQuery, useMutationQuery } = useReactQuery();

  const useCreatePost = () => {
    return useMutationQuery(allPostQueryKey, async (body: any) =>
      Axios.post(postConstants.productsUrl, body)
    );
  };
  const useGetAllPosts = () => {
    return useGetQuery(
      allPostQueryKey,
      async () => Axios.get(postConstants.productsUrl),
      true
    );
  };

  return { useGetAllPosts, useCreatePost };
};

export default usePostService;
