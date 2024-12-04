import { useState } from "react";

const AddPage = () => {
  const [restaurant, setRestaurant] = useState({
    title: "",
    type: "",
    img: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/restaurants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(restaurant),
      });
      if (response.ok) {
        alert("Restaurant added successfully!");
        setRestaurant({
          title: "",
          type: "",
          img: "",
        });
      } else {
        alert("Failed to add restaurant");
      }
    } catch (error) {
      console.error("Error adding restaurant:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Add Restaurant</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <input 
          type="text"
          placeholder="Title"
          name="title"
          value={restaurant.title}
          onChange={handleChange}
          className="input input-bordered input-info w-full max-w-xs"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Type
        </label>
        <input 
          type="text"
          placeholder="Type"
          name="type"
          value={restaurant.type}
          onChange={handleChange}
          className="input input-bordered input-info w-full max-w-xs"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Image URL
        </label>
        <input 
          type="text"
          placeholder="Image URL"
          name="img"
          value={restaurant.img}
          onChange={handleChange}
          className="input input-bordered input-info w-full max-w-xs"
        />
      </div>
      <button onClick={handleSubmit} className="btn btn-primary">Add Restaurant</button>
    </div>
  );
};

export default AddPage;
