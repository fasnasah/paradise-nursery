import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { useState } from "react";

function ProductList() {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const plants = {
    Indoor: [
      { name: "Snake Plant", price: 10, image:"https://via.placeholder.com/100"},
      { name: "Peace Lily", price: 12, image:"https://via.placeholder.com/100"},
      { name: "Spider Plant", price: 8, image:"https://via.placeholder.com/100"},
      { name: "Rubber Plant", price: 15, image:"https://via.placeholder.com/100"},
      { name: "ZZ Plant", price: 20, image:"https://via.placeholder.com/100"},
      { name: "Money Plant", price: 9, image:"https://via.placeholder.com/100"}
    ],
    Succulents: [
      { name: "Aloe Vera", price: 7, image:"https://via.placeholder.com/100"},
      { name: "Jade", price: 11, image:"https://via.placeholder.com/100"},
      { name: "Echeveria", price: 6, image:"https://via.placeholder.com/100"},
      { name: "Cactus", price: 5, image:"https://via.placeholder.com/100"},
      { name: "Haworthia", price: 9, image:"https://via.placeholder.com/100"},
      { name: "Sedum", price: 8, image:"https://via.placeholder.com/100"}
    ],
    AirPlants: [
      { name: "Tillandsia", price: 13, image:"https://via.placeholder.com/100"},
      { name: "Ionantha", price: 14, image:"https://via.placeholder.com/100"},
      { name: "Caput", price: 12, image:"https://via.placeholder.com/100"},
      { name: "Bulbosa", price: 11, image:"https://via.placeholder.com/100"},
      { name: "Xerographica", price: 25, image:"https://via.placeholder.com/100"},
      { name: "Stricta", price: 10, image:"https://via.placeholder.com/100"}
    ]
  };

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart({ ...addedToCart, [plant.name]: true });
  };

  return (
    <div>
      <Header />

      {Object.keys(plants).map(category => (
        <div key={category}>
          <h2>{category}</h2>

          {plants[category].map(plant => (
            <div key={plant.name}>
              <img src={plant.image} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>${plant.price}</p>

              <button
                onClick={() => handleAdd(plant)}
                disabled={addedToCart[plant.name]}
              >
                Add to Cart
              </button>

            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;