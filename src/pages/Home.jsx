import React, { useEffect, useState } from "react";
import { NameAndSearch, Search} from "../Components";
import Restaurants from "../Components/Restaurant";
import RestaurantService from "../services/restaurant.service";
import Swal from "sweetalert2";
function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // useEffect(() => {
  //   const getRestaurants = async () => {
  //     try {
  //     const response = await RestaurantService.getAllRestaurant();
  //     if (response.status ===200) {
  //       setRestaurants(response.data);
  //       setFilteredRestaurants(response.data);
  //     }
  //   } catch (error) {
  //     Swal.fire({
  //       title: "Get All Restaurant",
  //       text: error?.response?.data?.message || error.message,
  //       icon: "error",
  //     });
  //   }
  // };
  // getRestaurants();
  // },[]);
  return (
    <>
      <div className="container">
        <NameAndSearch />
        
        <Search restaurants={restaurants} setFilteredRestaurants={setFilteredRestaurants}/>
        <Restaurants restaurants={filteredRestaurants}/>
      </div>
    </>
  );
}
// export default function Home() {
//   const [restaurants, setRestaurants] = useState([]);
//   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//   useEffect(() => {

//     // fetch("http://localhost:5000/restaurants")
//     //   .then((res) => {
//     //     return res.json();
//     //   })
//     //   .then((response) => {
//     //     setRestaurants(response);
//     //     setFilteredRestaurants(response);
//     //   })
//     //   .catch((err) => {
//     //     console.log(err.message);
//     //   });
//   }, []);

export default Home;
  


