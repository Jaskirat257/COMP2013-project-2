//Author: Jaskirat
//Description: PROJECT-2

// Importing our grocery app styles
import "./App.css";
// Importing product data 
import products from "./data/products";
// Importing the container that shows products and cart
import GroceriesAppContainer from "./Components/GroceriesAppContainer";

function App() {
  return (
    <>
     {/* Show the grocery container and give it the products */}
      <GroceriesAppContainer products={products} />
    </>
  );
}

export default App;