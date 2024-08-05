import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const Register = () => {
    const[user, setUser] = useState({
        username:"",
        email:"",
        password:"",
});
const navigate = useNavigate();
const handleChange = (e) => {
  const { name, value } = e.target;
    setUser({...user, [name]:value});
};
const handleSubmit = async() => {
    try {
        const register = await AuthService.register(
          user.username, 
          user.email, 
          user.password
        );
        if(register.status === 200) {
            Swal.fire({
                title: "User Registration",
                text: register.data.message,
                icon: "success",
            });
            setUser({
                username: "",
                email:"",
                password:"",
            });
            navigate("/login");
        }
    }catch (error) {
     console.log(error);
     Swal.fire({
        title: "user Registration",
        text: error.response.data.message || error.message,
        icon: "error",
     });
    }
};
const handleCancel = () => {
    setUser({
        username:"",
        email:"",
        password:"",
    });
    navigate("/");
};

return (
  <div className="container mx-auto max-w-96 my-auto">
    <label className="input input-bordered flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70"
      >
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
      </svg>
      <input type="text" className="grow" placeholder="Username" name="username" onChange={handleChange}/>
    </label>
    <label className="input input-bordered flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70"
      >
        <path
          fillRule="evenodd"
          d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
          clipRule="evenodd"
        />
      </svg>
      <input type="password" className="grow" name="password" onChange={handleChange}/>
    </label>
  </div>
);
};


export default Register;
