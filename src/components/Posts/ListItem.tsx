import { Link } from "react-router-dom";
import ROUTER_PATH from "../../constants/routes.ts";
import { IPost } from "../../interfaces/app.interface.ts";
import usePosts from "../../hooks/usePosts.ts";

const ListItem = ({ item }: { item: IPost }) => {
  const { prefetchPostData } = usePosts();

  return (
    <Link
      onMouseEnter={() => prefetchPostData(item.id)}
      to={`${ROUTER_PATH.POST}?id=${item.id}`}
      className="link" key={item.id}
    >
      <div className="listItem">{item.id}</div>
    </Link>
  )
}

export default ListItem;
