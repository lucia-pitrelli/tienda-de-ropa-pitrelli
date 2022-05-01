import logo from "./mujerLogo.jpeg";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./container/ItemListContainer";
import Contador from "./components/ItemCount";

function App() {
  return (
    <>
      <img
        src={logo}
        style={{ width: "100px", height: "100px", padding: "20px" }}
        className="App-logo"
        alt="logo"
      />

      <NavBar />
      <ItemListContainer greeting="Bienvenido a Mujer Bonita" />
      <Contador></Contador>
    </>
  );
}

export default App;
