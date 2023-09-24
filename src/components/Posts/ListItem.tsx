import { Link } from "react-router-dom";
import ROUTER_PATH from "../../constants/routes.ts";
import { IPost } from "../../interfaces/app.interface.ts";

const ListItem = ({ item }: { item: IPost }) => {
  return (
    <Link to={`${ROUTER_PATH.POST}?id=${item.id}`} className="link" key={item.id}>
      <div className="listItem">{item.id}</div>
    </Link>
  )
}

export default ListItem;
