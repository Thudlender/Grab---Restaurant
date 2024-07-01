import { useState } from "react";

const AddPage = () => {
  const [restaurants, setRestaurants] = useState({
    title:"",
    type:"",
    img:""
  })
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setRestaurants({...restaurants,[name]:value})
  }
  const handSubmit = async () =>{
    try {
        const response = await fetch("http://localhost:5000/restaurants", {
            method: "POST",
            body: JSON.stringify(restaurants),
        });
        if(response.ok){
            alert("Restaurant added successfully!");
            setRestaurants({
                title:"",
                type:"",
                img:"",
            });
        }
    } catch (error) {
        
    }
  }
};
