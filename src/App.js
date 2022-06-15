import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Main from "./components/Main";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/productos" element={<ItemListContainer 
                greeting="Estos son nuestro productos!"/>} />
              <Route path="/categorias" element={<div>Categoria de productos</div>} />
              <Route path="/productos/:id" element={<ItemDetailContainer />} />
            </Routes> 
      </BrowserRouter>
  );
}

export default App;
