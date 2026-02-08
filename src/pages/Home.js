import AddFood from "../components/AddFood";
import FoodList from "../components/FoodList";
import { Link } from "react-router-dom";

function Home({ user }) {
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
    <Link to="/login">
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginRight: "10px"
        }}
      >
        Login
      </button>
    </Link>

    <Link to="/signup">
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        Signup
      </button>
    </Link>
  </div>

  <FoodList user={user} />
</>

      )}
    </div>
  );
}

export default Home;
