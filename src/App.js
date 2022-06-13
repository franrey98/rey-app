import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <div className="">
      <NavBar />
      <ItemListContainer 
        greeting="La tienda de deportes top 1 del pais!"
      />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
