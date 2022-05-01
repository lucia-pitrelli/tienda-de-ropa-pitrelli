import logo from './mujerLogo.jpeg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer'

function App() {
  return (
<>
        <img src={logo} style={{ width: '100px', height:'100px'}} className="App-logo" alt="logo" />
       
        <NavBar/>
        <ItemListContainer greeting='Bienvenido a Mujer Bonita'/>
        </>  

  );
}

export default App;
