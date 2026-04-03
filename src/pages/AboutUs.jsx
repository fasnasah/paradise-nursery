import { useNavigate } from "react-router-dom";

function AboutUs() {
  const navigate = useNavigate();

  return (
    <div style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6')",
      height: "100vh",
      backgroundSize: "cover",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      color:"white"
    }}>
      <h1>Paradise Nursery</h1>
      <p>Beautiful houseplants for your home</p>
      <button onClick={()=>navigate("/plants")}>
        Get Started
      </button>
    </div>
  );
}

export default AboutUs;