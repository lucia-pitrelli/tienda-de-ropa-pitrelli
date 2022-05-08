/*import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Items from "./Item";
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const detailData = getItemDetail();
    setProducto(detailData);
  }, []);

  const getItemDetail = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Items.find((producto) => producto.id === itemId));
      }, 2000);
    });
  };

  return <div> Item - {itemId}</div>;
};

export default ItemDetailContainer;*/
