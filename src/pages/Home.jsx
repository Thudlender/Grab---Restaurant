import React, { useEffect, useState } from "react";
import { NameAndSearch, Search} from "../Components";
import Restaurants from "../Components/Restaurant";

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
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
  }, []);
  return (
    <>
      <div className="container">
        <NameAndSearch />
        
        <Search restaurants={restaurants} setFilteredRestaurants={setFilteredRestaurants}/>
        <Restaurants restaurants={filteredRestaurants}/>
      </div>
    </>
  );
};

