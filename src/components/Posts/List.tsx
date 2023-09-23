import usePosts from "../../hooks/usePosts.ts";
import { Link } from "react-router-dom";
import ROUTER_PATH from "../../constants/routes.ts";

const List = () => {
  const { getPostsList } = usePosts();
  const { isLoading, error, data } = getPostsList()

  if (error) {
    return <div>{JSON.stringify(error)}</div>
  }

  return (
    <div>
      {isLoading ? (
        <div>...Loading</div>
      ) : (
        <div className="listWrapper">{
          data?.map((item) => {
            return (
              <Link to={`${ROUTER_PATH.POST}?id=${item.id}`} className="link" key={item.id}>
                <div className="listItem">{item.id}</div>
              </Link>
            )
          })
        }</div>
      )}
    </div>
  )
};

export { List };
