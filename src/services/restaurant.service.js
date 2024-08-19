import api from "./api";
const RESTO_API = import.meta.env.VITE_RESTO_API;

//get all restaurant
const getAllRestaurant = async () => {
    return await api.get(RESTO_API);
};

//get restaurant by Id
const getRestaurantById = async (id) => {
    //http://localhost:5000/api/v1/restaurants/1
    return await api.get(RESTO_API + `/${id}`);
}

//update a reataurant data
const editRestaurant = async (id, restaurant) =>{
    return await api.post(RESTO_API + `/${id}`, restaurant);
}

const RestaurantService = {
    getAllRestaurant,
    getRestaurantById
};

export default RestaurantService;