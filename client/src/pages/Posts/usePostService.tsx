import { useState } from "react";
import { useReactQuery } from "../../hooks/useReactQuery";
import Axios from "../../services/apiClient";
import { postConstants } from "../../constants/constants";

const usePostService = () => {
  const [posts, setPosts] = useState([]);

  const allPostQueryKey = "Post";

  const { useGetQuery, useMutationQuery } = useReactQuery();

  const createPost = () => {
    return useMutationQuery(allPostQueryKey, async (body: any) =>
      Axios.post(postConstants.productsUrl, body)
    );
  };
  const getAllPosts = () => {
    return useGetQuery(
      allPostQueryKey,
      async () => Axios.get(postConstants.productsUrl),
      true
    );
  };

  return { getAllPosts, createPost };
};

export default usePostService;
