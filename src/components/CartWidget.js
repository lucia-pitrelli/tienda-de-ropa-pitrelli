import { BsFillCartPlusFill } from "react-icons/bs";
import './cartWidget.css';

const CartWidget = () => {
    return (
        <>
        <div id="cart">
       <h1 class="titulo">Carrito de compras</h1>
       <p> <BsFillCartPlusFill/> </p>
       </div>
        </>
    )
}

export default CartWidget;