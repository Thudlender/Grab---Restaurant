import React from "react";
import Swal from "sweetalert2";
import RestaurantService from "../services/restaurant.service";
import { useAuthContext } from "../context/AuthContext";

export const Card = ({ id, img, title, type }) => {
  const { user } = useAuthContext();
  const handeDelete = async (id) => {
    try {
      const response = await fetch("http://localhost:5000/restaurants/" + id, {
        method: "DELETE"
      });
      // if (response.ok) {
      //   alert(`Restaurant id : ${id} is Deleted!`);
      //   window.location.reload();
      // }
    } catch (err) {
      console.log(err);
    }
 }

  return (
    <div>
      <div className="card card-compact w-80 h-80 bg-base-100 shadow-xl hover:translate-y-3">
        <figure>
        <img src={imgUrl} alt="" className="rounded w-72 h-48" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-sm">{type}</p>

      {user && 
        (user.roles.includes("ROLES_MODERATOR") || 
          user.roles.includes("ROLES_ADMIN")) && (
          <div className="card-actions justify-end">
            {user.roles.includes("ROLES_ADMIN") && (
          <button className="btn  btn-error" onClick={()=>handeDelete(id)}>
              Delete
            </button>
            )}
            <a href={`/Edit/${id}`} className="btn btn-primary">
              Edit Now
            </a>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};
