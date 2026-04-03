import { useNavigate } from "react-router-dom";
import "../App.css";

function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="background-image">
      <div className="about-us-container">
        <h1>Welcome to Paradise Nursery</h1>
        <p>
          Paradise Nursery is your trusted destination for beautiful indoor plants.
          We provide a variety of houseplants that bring freshness and positivity
          into your home.
        </p>
        <p>
          Our mission is to make plant shopping simple and enjoyable while helping
          customers create greener living spaces.
        </p>

        <button onClick={() => navigate("/plants")}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default AboutUs;