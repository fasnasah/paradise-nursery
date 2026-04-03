import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cart = useSelector(state => state.cart.items);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div style={{
      display:"flex",
      justifyContent:"space-between",
      padding:"15px",
      background:"green",
      color:"white"
    }}>
      <h2>Paradise Nursery</h2>

      <div>
        <Link to="/" style={{margin:"10px", color:"white"}}>Home</Link>
        <Link to="/plants" style={{margin:"10px", color:"white"}}>Plants</Link>
        <Link to="/cart" style={{margin:"10px", color:"white"}}>
          Cart 🛒 ({totalItems})
        </Link>
      </div>
    </div>
  );
}

export default Header;