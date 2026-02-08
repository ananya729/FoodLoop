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
          {/* 🔴 DEBUG PROOF SECTION */}
          <h2
            style={{
              color: "red",
              fontSize: "32px",
              border: "4px solid red",
              padding: "10px",
              marginBottom: "20px"
            }}
          >
            🔴 DEBUG: HOME.JS UPDATED
          </h2>

          <p style={{ fontSize: "20px" }}>
            If you see this red box, your Home.js changes ARE live.
          </p>

          <div
            style={{
              border: "5px solid red",
              padding: "20px",
              marginBottom: "20px",
              backgroundColor: "#ffecec"
            }}
          >
            <p style={{ fontSize: "24px", marginBottom: "10px" }}>
              LOGIN BUTTON SHOULD BE VISIBLE BELOW
            </p>

            <button
              style={{
                padding: "20px 40px",
                fontSize: "24px",
                backgroundColor: "black",
                color: "white",
                border: "none",
                cursor: "pointer"
              }}
            >
              LOGIN
            </button>
          </div>

          <FoodList user={user} />
        </>
      )}
    </div>
  );
}

export default Home;
