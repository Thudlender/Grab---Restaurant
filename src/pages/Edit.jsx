import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RestaurantService from "../services/restaurant.service";

const Edit = () => {
    // 1. Get ID from query string
    const {id} = useParams();
    const navigate = useNavigate()
    const [restaurants, setRestaurants] = useState({
      title: "",
      type: "",
      imageUrl: "",
    });
    // 2. Get restaurant by ID
    useEffect(()=>{
        RestaurantService.getRestaurantById(id).then((response)=> {
            if(response.status === 200){
                setRestaurants(response.data);
            }
        })
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
            const response = await RestaurantService.editRestaurant(id, restaurants);
            if(response.status === 200) {
                Swal.fire({
                  title: "Restaurant update",
                  text: response.data.message,
                  icon: "success",
                });
                navigate("/")
            }
        }
      catch (error) {
        Swal.fire({
          title: "Restaurant Update",
          text: error?.response?.data?.message || error.message,
          icon: "error",
        });
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