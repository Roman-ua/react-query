import usePosts from "../../hooks/usePosts.ts";
import CreatePost from "./CreatePost.tsx";
import ListItems from "./ListItems.tsx";
import Loader from "../Loader/Loader.tsx";

const List = () => {
  const { getPostsList } = usePosts();
  const { isLoading, error, data } = getPostsList()

  if (error) {
    return <div>{JSON.stringify(error)}</div>
  }

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ListItems data={data} />
          <CreatePost />
        </>
      )}
    </div>
  )
};

export { List };
