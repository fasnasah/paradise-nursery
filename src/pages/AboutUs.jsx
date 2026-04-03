import { useNavigate } from "react-router-dom";
import "../App.css";

function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="background-image">
      <div className="about-us-container">
        <h1>Welcome to Paradise Nursery</h1>

        <p>
          Paradise Nursery is your one-stop destination for beautiful and healthy
          houseplants. We offer a wide variety of indoor plants, succulents, and
          air plants that bring freshness and natural beauty into your living space.
        </p>

        <p>
          Our mission is to make plant shopping easy and enjoyable. Whether you are
          a beginner or a plant enthusiast, we provide carefully selected plants
          that help create a peaceful and green environment in your home.
        </p>

        <button onClick={() => navigate("/plants")}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default AboutUs;