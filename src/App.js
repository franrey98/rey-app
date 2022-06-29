import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Main from "./components/Main";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemCategory from "./components/ItemCategory";
import RouteError from "./components/RouteError";
import ItemCategorySelect from "./components/ItemCategorySelect";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="pb-8">
          <NavBar />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/productos" element={<ItemListContainer greeting="Estos son nuestro productos!"/>} />
              <Route path="/categorias" element={<ItemCategory/>} />
              <Route path="/productos/:id" element={<ItemDetailContainer />} />
              <Route path="/categorias/:category" element={<ItemCategorySelect/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="*" element={<RouteError/>} />
            </Routes> 
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
