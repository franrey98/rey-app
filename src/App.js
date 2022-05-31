import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="">
      <NavBar />
      <ItemListContainer 
        greeting="La tienda de deportes top 1 del pais!"
      />
    </div>
  );
}

export default App;
