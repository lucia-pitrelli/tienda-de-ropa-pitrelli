import ItemList from "./ItemList";
import "./itemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <div class="greeting"> {greeting} </div>
      <ItemList></ItemList>
    </div>
  );
};

export default ItemListContainer;
