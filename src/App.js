import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import ItemListContainer from "./container/ItemListContainer";
import Contador from "./components/ItemCount";
import Title from "./components/Title";
import ItemDetailContainer from "./container/ItemDetailContainer";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Logo />
        <NavBar />
        <Routes>
          <Route path="/" element={((<Title />), (<ItemListContainer />))} />
          <Route path="/items/:itemId" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>

      <Contador></Contador>
    </>
  );
}

export default App;
