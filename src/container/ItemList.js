import ItemCard from "./ItemCard";

const ItemList = ({ productos }) => {
  return (
    <div>
      {productos.map((producto) => (
        <ItemCard key={producto.id} Items={producto} />
      ))}
    </div>
  );
};

export default ItemList;
