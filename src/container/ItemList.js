import { useEffect, useState } from "react";
import  Items  from "./Item";
import  ItemCard  from "./ItemCard"

const ItemList = () => {

    //state de productos

    const [productos, setProductos] = useState( [] )

    useEffect(() => {
        console.log(Items);
    
        const productsList = new Promise ( (resolve, reject) => {
            // mock estatico de datos que devuelva conjunto de item en 2 segundos (simulacion de tiempo de espera)
            setTimeout(() => {
                resolve(Items)
            }, 2000)  
        })

        productsList.then( (result) => {
            console.log("pepe", result);
            setProductos(result)
          }).catch((err) => {
              console.log(err);
          })
        }, [])

   return (
        <div>
    {productos.map( producto => <ItemCard key={producto.id} Items={producto}/>)}
        </div>
    )
}


export default ItemList

