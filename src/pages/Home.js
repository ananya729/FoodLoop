import AddFood from "../components/AddFood";
import FoodList from "../components/FoodList";

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
          <FoodList user={user} />
        </>
      )}
    </div>
  );
}

export default Home;
