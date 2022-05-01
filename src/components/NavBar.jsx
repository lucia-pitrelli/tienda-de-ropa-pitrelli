import CartWidget from './CartWidget';
import './navBar.css';

const NavBar = () => {
    return (
<>
<nav>
<ul>
<li><a href="#">Inicio</a></li>
<li><a href="#">Zapatos</a></li>
<li><a href="#">Carteras</a></li>
<li><a href="#">Camperas</a></li>
<li><a href="#">Bijou</a></li>
<li><a href="#">Remeras</a></li>
<li><a href="#">Jeans</a></li>
</ul>
</nav>
<div id ="widget">
<CartWidget/>
</div>
</>
    )
}



export default NavBar;