import { useState } from "react";
// import './App.css'
import Topnavbar from "./components/Topnavbar.jsx";
import Navbar from "./components/Navbar.jsx";
import Slider from "./components/Slider.jsx";
import { clothingData } from "./assets/products/Product.js";
import ProductCard from "./components/ProductCard.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Topnavbar />
      <Navbar />
      <Slider />
      <div>
        <h2 className="text-center font-bold uppercase text-2xl text-black mt-5">
          New Arrivals
        </h2>
      </div>
      <div className="flex gap-5 justify-center m-5">
        {clothingData.map((data) => {
          return (
            <ProductCard key={data.id} title={data.title} image={data.image} price={data.price} category={data.category}/>
          );
        })}
      </div>
    </>
  );
}

export default App;
