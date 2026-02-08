import AddFood from "../components/AddFood";
import FoodList from "../components/FoodList";
import { Link } from "react-router-dom";

function Home({ user, onLogout }) {
  return (
    <div style={{ padding: "40px" }}>
      <h1>🍽️ FoodLoop</h1>

      {user ? (
        <>
          <p>Welcome, {user.email}</p>

          <button
            onClick={onLogout}
            style={{ marginBottom: "20px" }}
          >
            Logout
          </button>

          <AddFood user={user} />
          <hr />
          <FoodList user={user} />
        </>
      ) : (
        <>
          <p>Please login or signup to share food.</p>

          <div style={{ marginBottom: "20px" }}>
            <Link to="/login">
              <button style={{ marginRight: "10px" }}>Login</button>
            </Link>

            <Link to="/signup">
              <button>Signup</button>
            </Link>
          </div>

          <FoodList user={user} />
        </>
      )}
    </div>
  );
}

export default Home;
