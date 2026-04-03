import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "../redux/CartSlice";
import { useNavigate } from "react-router-dom";

function CartItem() {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Header />

      <h1>Shopping Cart</h1>

      {cart.map(item => (
        <div key={item.id} style={{border:"1px solid gray", margin:"10px", padding:"10px"}}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>
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