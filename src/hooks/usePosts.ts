import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import PostService from "../services/post.service.ts";
import { CREATE_POST_QUERY, POST_QUERY } from "../constants/queryKeys.ts";
import postService from "../services/post.service.ts";
import { IPost } from "../interfaces/app.interface.ts";

const usePosts = () => {
  const queryClient = useQueryClient();

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
    cleanFormHandler: () => void,
  ) => {
    const successHandler = async (data: IPost) => {
      cleanFormHandler();
      queryClient.setQueryData([POST_QUERY, data.id], data);
      await queryClient.invalidateQueries([POST_QUERY], { exact: true });
    }

    return useMutation([CREATE_POST_QUERY],
      (data: { title: string, description: string, author: string }) => {
        return postService.createPost(data.title, data.description, data.author)
    }, {
      onSuccess(data: { data: IPost }) {
        successHandler(data.data)
      }
    })
  }

  const prefetchPostData = async (id: number) => {
    await queryClient.prefetchQuery({
      queryKey: [POST_QUERY, id],
      queryFn: () => getPostById(`${id}`)
    })
  }

  return { getPostsList, getPostById, createPost, prefetchPostData };
};

export default usePosts;
