import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Items from "./Item";
import "./itemListContainer.css";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    console.log(Items);

    const productsList = new Promise((resolve, reject) => {
      // mock estatico de datos que devuelva conjunto de item en 2 segundos (simulacion de tiempo de espera)
      setTimeout(() => {
        resolve(Items);
      }, 2000);
    });

    productsList
      .then((result) => {
        console.log("lista", result);
        setProductos(result);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading ? (
        <iframe
          src="https://giphy.com/embed/lPcbCcPfACi3ncc3cv"
          width="280"
          height="159"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
          padding="20px"
        ></iframe>
      ) : (
        <ItemList productos={productos} />
      )}
    </>
  );
};

export default ItemListContainer;
