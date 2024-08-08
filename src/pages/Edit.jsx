import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
    // 1. Get ID from query string
    const {id} = useParams();
    const navigate = useNavigate()
    const [restaurants, setRestaurants] = useState({
        title:"",
        type:"",
        img:"",
    });
    // 2. Get restaurant by ID
    useEffect(()=>{
        fetch("http://localhost:5000/restaurants/"+id)
          .then((res) => {
            return res.json();
          })
          .then((response) => {
            setRestaurants(response);
            
          })
          .catch((err) => {
            console.log(err.message);
          });
    },[id]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setRestaurants({ ...restaurants, [name]: value });
    };
    const handSubmit = async () => {
        try {
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
            id="title"
            name="title"
            onChange={handleChange}
            value={restaurants.title}
            />
            </label>
            <label className="input input-bordered flex items-center gap-2">Restaurant type
                <input 
                    type="text"
                    className="grow" 
                    placeholder="Restaurant Name"
                    id="type"
                    name="type"
                    onChange={handleChange}
                    value={restaurants.type}
                     />
            </label>
            <label className="input input-bordered flex items-center gap-2">Restaurant ImageUrl
                <input 
                    type="text"
                    className="grow" 
                    placeholder="Restaurant Name"
                    id="img"
                    name="img"
                    onChange={handleChange}
                    value={restaurants.img}
                     />
            </label>
            {restaurants.img && (
                <div className="flex items-center gap-2">
                    <img src={restaurants.img}
                    className="h-32" />
                </div>
            )}
            <button type="submit" className="btn btn-success" onClick={handSubmit}>
                Edit restaurant
            </button>
        </div>
    </div>
  );
}
export default Edit;