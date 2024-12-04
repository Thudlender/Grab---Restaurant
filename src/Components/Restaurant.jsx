import { Card } from "./Card";
import { useEffect, useState } from "react";

const Restaurants = ({restaurants}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4" id="cards">
      {restaurants &&
        restaurants.map((restaurant) => {
          return (
            <Card
              key={restaurant.id}
              id={restaurant.id}
              img={restaurant.img}
              title={restaurant.title}
              desc={restaurant.desc}
            />
          );
        })}
    </div>
  );
};

export default Restaurants;
