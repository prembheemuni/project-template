import { useState } from "react";
import { useReactQuery } from "../../hooks/useReactQuery";
import Axios from "../../services/apiClient";

const usePostService = () => {
  const [posts, setPosts] = useState([]);

  const allPostQueryKey = "Post";

  const { useGetQuery, useMutationQuery } = useReactQuery();

  const createPost = () => {
    return useMutationQuery(allPostQueryKey, async (body: any) =>
      Axios.post("products", body)
    );
  };
  const getAllPosts = () => {
    return useGetQuery(
      allPostQueryKey,
      async () => Axios.get("products"),
      true
    );
  };

  return { getAllPosts, createPost };
};

export default usePostService;
