import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../redux/CartSlice";
import { useNavigate } from "react-router-dom";

function CartItem() {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity + 1
      })
    );
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          name: item.name,
          quantity: item.quantity - 1
        })
      );
    }
  };

  return (
    <div>
      <Header />
      <h1>Shopping Cart</h1>

      {cart.map(item => (
        <div key={item.name}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>Unit Price: ${item.price}</p>
          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => handleIncrement(item)}>+</button>
          <button onClick={() => handleDecrement(item)}>-</button>

          <button onClick={() => dispatch(removeItem(item.name))}>
            Delete
          </button>
        </div>
      ))}

      <h2>Total Amount: ${totalAmount}</h2>

      <button onClick={() => navigate("/plants")}>
        Continue Shopping
      </button>

      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>
    </div>
  );
}

export default CartItem;