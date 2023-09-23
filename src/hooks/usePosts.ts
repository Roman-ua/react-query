import { useQuery } from "@tanstack/react-query";
import PostService from "../services/post.service.ts";
import { POST_QUERY } from "../constants/queryKeys.ts";

const usePosts = () => {
  const getPostsList = () => {
    return useQuery([POST_QUERY], () => PostService.getPostsList(), {
      select: ({ data }) => data
    });
  }

  const getPostById = (id: string) => {
    return useQuery([POST_QUERY, +id], () => PostService.getPostById(id), {
      select: ({ data }) => data
    })
  }

  return { getPostsList, getPostById };
};

export default usePosts;
