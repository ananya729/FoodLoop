import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  updateDoc,
  deleteDoc
} from "firebase/firestore";
import { db } from "../firebase";

function FoodList({ user }) {
  const [foods, setFoods] = useState([]);
  const [filterLocation, setFilterLocation] = useState("");

  useEffect(() => {
    const q = query(
      collection(db, "foods"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const foodData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFoods(foodData);
    });

    return () => unsubscribe();
  }, []);

  const claimFood = async (foodId) => {
    if (!user) return alert("Please login to claim food");

    const foodRef = doc(db, "foods", foodId);
    await updateDoc(foodRef, {
      claimed: true,
      claimedBy: user.email,
    });
  };

  const deleteFood = async (foodId) => {
    const confirmDelete = window.confirm("Delete this food post?");
    if (!confirmDelete) return;

    await deleteDoc(doc(db, "foods", foodId));
  };

  return (
    <div>
      <h3>Available Food</h3>

      <input
        type="text"
        placeholder="Enter location (e.g. San Marcos)"
        value={filterLocation}
        onChange={(e) => setFilterLocation(e.target.value)}
        style={{ marginBottom: "15px", padding: "5px" }}
      />

      {foods.length === 0 && <p>No food posted yet.</p>}

      {foods
        .filter((food) =>
          food.location
            ?.toLowerCase()
            .includes(filterLocation.toLowerCase())
        )
        .map((food) => (
          <div
            key={food.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              backgroundColor: food.claimed ? "#eee" : "white"
            }}
          >
            <p><strong>Food:</strong> {food.foodName}</p>
            <p><strong>Quantity:</strong> {food.quantity}</p>
            <p><strong>Location:</strong> {food.location}</p>
            <p><strong>Posted by:</strong> {food.userEmail}</p>

            {food.claimed ? (
              <p><strong>Claimed by:</strong> {food.claimedBy}</p>
            ) : food.userEmail === user?.email ? (
              <p><em>You posted this</em></p>
            ) : (
              <button onClick={() => claimFood(food.id)}>
                Claim
              </button>
            )}

            {food.userEmail === user?.email && (
              <button
                onClick={() => deleteFood(food.id)}
                style={{ marginLeft: "10px", color: "red" }}
              >
                Delete
              </button>
            )}
          </div>
        ))}
    </div>
  );
}

export default FoodList;
