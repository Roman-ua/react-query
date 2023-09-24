import {useMutation, useQuery} from "@tanstack/react-query";
import PostService from "../services/post.service.ts";
import {CREATE_POST_QUERY, POST_QUERY} from "../constants/queryKeys.ts";
import postService from "../services/post.service.ts";

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

  const createPost = (
    setTitle: (arg: string) => void,
    setDescription: (arg: string) => void
  ) => {
    return useMutation([CREATE_POST_QUERY],
      (data: {title: string, description: string}) => {
        return postService.createPost(data.title, data.description)
    }, {
      onSuccess() {
        setTitle('');
        setDescription('');
      }
    })
  }

  return { getPostsList, getPostById, createPost };
};

export default usePosts;
