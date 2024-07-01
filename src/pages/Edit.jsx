import { usecase, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
    // 1. Get ID from query string
    const {id} = useParams();
    const [restaurants, setRestaurants] = useState({
        title:"",
        type:"",
        img:"",
    });
    // 2. Get restaurant by ID
    useEffect(()=>{
        fetch("http://localhost:5000/restaurants")
          .then((res) => {
            return res.json();
          })
          .then((response) => {
            setRestaurants(response);
            setFilteredRestaurants(response);
          })
          .catch((err) => {
            console.log(err.message);
          });
    },[id])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setRestaurants({ ...restaurants, [name]: value });
    };
    const handSubmit = async () => {
        try {
            //TODO
            const response = await fetch("http://localhost:5000/restaurants/" + id,{
                method: "PUT",
                body: JSON.stringify(restaurants)
            });
            if (response.ok) {
                alert("Update a restaurant id="+id+"successfully!")
                navigate("/")
            }
        }
      catch (error) {
        console.log(error);
    }
};
return (
    <div className="container mx-auto">
        <div>
            <h1 className="text-2x1 text-center">Edit Restaurant</h1>
        </div>
        <div className="space-y-2">
            <label className="input input-bordered flex items-center gap-2">Restaurant Name
            <input 
            type="text"
            className="grow"
            placeholder="Restaurant Name"
            name="title"
            onChange={handleChange}
            value={restaurant.title}
            />
            </label>
            <label className="input input-bordered flex items-center gap-2">Restaurant type
                <input 
                    type="text"
                    className="grow" 
                    placeholder="Restaurant Name"
                    name="title"
                    onChange={handleChange}
                    value={restaurant.type}
                     />
            </label>
            <label className="input input-bordered flex items-center gap-2">Restaurant ImageUrl
                <input 
                    type="text"
                    className="grow" 
                    placeholder="Restaurant Name"
                    name="title"
                    onChange={handleChange}
                    value={restaurant.img}
                     />
            </label>
            {restaurants.img && (
                <div className="flex items-center gap-2">
                    <img src={restaurant.img}
                    className="h-32" />
                </div>
            )}
            <button className="btn btn-success" onClick={handSubmit}>
                Edit restaurant
            </button>
        </div>
    </div>
  );
}
export default Edit;