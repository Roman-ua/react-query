import usePosts from "../../hooks/usePosts.ts";
import { useSearchParams } from "react-router-dom";
import Loader from "../Loader/Loader.tsx";

const Post = () => {
  const { getPostById } = usePosts();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id') || '1';
  const { isLoading, error, data } = getPostById(id);

  if (error) {
    return <div>{JSON.stringify(error)}</div>
  }

  return (
    <div className="postItemWrapper">
      <div className="postItemContent">
        {data?.id !== +id || isLoading ? (
          <Loader />
        ) : (
          <>
            <div><span>Post ID: </span>{data.id}</div>
            <div><span>Post Title: </span>{data.title}</div>
            <div><span>Post Text: </span>{data.body}</div>
            <div><span>Post Author: </span>{data.author}</div>
          </>
        )}
      </div>
    </div>
  )
}

export { Post };
