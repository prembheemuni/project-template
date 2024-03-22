import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import toastService from "../services/toastService";

export const useReactQuery = () => {
  const queryClient = useQueryClient();

  const useGetQuery = (QUERY_KEY: string, queryFn: any, enabled: boolean) => {
    return useQuery({
      queryKey: [QUERY_KEY],
      queryFn: queryFn,
      enabled: enabled,
      refetchOnWindowFocus: false,
    });
  };

  const useMutationQuery = (QUERY_KEY: string, mutationFn: any) => {
    return useMutation({
      mutationFn: mutationFn,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
      },
      onError: () => {},
    });
  };
  return { useGetQuery, useMutationQuery };
};
