import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Main from "./components/Main";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemCategory from "./components/ItemCategory";
import RouteError from "./components/RouteError";
import ItemCategorySelect from "./components/ItemCategorySelect";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/productos" element={<ItemListContainer greeting="Estos son nuestro productos!"/>} />
              <Route path="/categorias" element={<ItemCategory/>} />
              <Route path="/productos/:id" element={<ItemDetailContainer />} />
              <Route path="/categorias/:category" element={<ItemCategorySelect/>} />
              <Route path="*" element={<RouteError/>} />
            </Routes> 
      </BrowserRouter>
  );
}

export default App;
