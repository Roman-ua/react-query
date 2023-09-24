import { IPost } from "../../interfaces/app.interface.ts";
import ListItem from "./ListItem.tsx";

const ListItems = ({ data }: { data: IPost[] | undefined }) => {
  return (
    <div className="listWrapper">{
      data?.map((item) => <ListItem item={item} />)
    }</div>
  )
}

export default ListItems;
