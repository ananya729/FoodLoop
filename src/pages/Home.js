import AddFood from "../components/AddFood";
import FoodList from "../components/FoodList";
import { useNavigate } from "react-router-dom";

function Home({ user }) {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px" }}>
      <h1>🍽️ FoodLoop</h1>

      {user ? (
        <>
          <p>Welcome, {user.email}</p>
          <AddFood user={user} />
          <hr />
          <FoodList user={user} />
        </>
      ) : (
        <>
          <p>Please login or signup to share food.</p>

          <div style={{ marginBottom: "20px" }}>
            <button
              onClick={() => navigate("/login")}
              style={{
                padding: "10px 20px",
                backgroundColor: "black",
                color: "white",
                border: "none",
                cursor: "pointer",
                marginRight: "10px",
                fontSize: "16px"
              }}
            >
              Login
            </button>

            <button
              onClick={() => navigate("/signup")}
              style={{
                padding: "10px 20px",
                backgroundColor: "green",
                color: "white",
                border: "none",
                cursor: "pointer",
                fontSize: "16px"
              }}
            >
              Signup
            </button>
          </div>

          <FoodList user={user} />
        </>
      )}
    </div>
  );
}

export default Home;
