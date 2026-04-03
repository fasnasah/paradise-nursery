import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

function ProductList() {
  const dispatch = useDispatch();

  const plants = [
    { id: 1, name: "Snake Plant", price: 10, category: "Indoor" },
    { id: 2, name: "Peace Lily", price: 15, category: "Indoor" },
    { id: 3, name: "Spider Plant", price: 12, category: "Indoor" },

    { id: 4, name: "Aloe Vera", price: 8, category: "Succulent" },
    { id: 5, name: "Cactus", price: 9, category: "Succulent" },
    { id: 6, name: "Jade Plant", price: 11, category: "Succulent" },

    { id: 7, name: "Air Plant", price: 14, category: "Air Plants" },
    { id: 8, name: "Tillandsia", price: 13, category: "Air Plants" },
    { id: 9, name: "Ionantha", price: 16, category: "Air Plants" }
  ];

  const categories = ["Indoor", "Succulent", "Air Plants"];

  return (
    <div>
      <Header />

      <h1 style={{textAlign:"center"}}>Plants</h1>

      {categories.map(category => (
        <div key={category}>
          <h2>{category}</h2>

          {plants
            .filter(p => p.category === category)
            .map(plant => (
              <div key={plant.id}>
                <p>{plant.name} - ${plant.price}</p>

                <button
                  onClick={() => dispatch(addToCart(plant))}
                >
                  Add to Cart
                </button>

              </div>
            ))
          }

        </div>
      ))}
    </div>
  );
}

export default ProductList;