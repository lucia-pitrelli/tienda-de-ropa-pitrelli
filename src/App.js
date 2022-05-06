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
      <h2 class="title">Las ofertas de la semana</h2>
      <ItemListContainer />
      <Contador></Contador>
    </>
  );
}

export default App;
