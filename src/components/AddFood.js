import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

function AddFood({ user }) {
  const [foodName, setFoodName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return alert("Please login first");

    try {
      await addDoc(collection(db, "foods"), {
        foodName,
        quantity,
        location,
        userEmail: user.email,
        claimed: false,
        claimedBy: null,
        createdAt: serverTimestamp(),
    });


      setFoodName("");
      setQuantity("");
      setLocation("");
      alert("Food posted!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h3>Post Food</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Food name"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
        />
        <br /><br />
        <input
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <br /><br />
        <input
          placeholder="Location / Zip code"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <br /><br />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default AddFood;
