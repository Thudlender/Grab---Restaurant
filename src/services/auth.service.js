import api from "./api";
import TokenService from "./token.service";

const API_URL = "/api/v1/auth";

const register = async (username, email, password) => {
    return await api.post(API_URL + "/signup", { username, email, password });
};

const login = async (username, password) =>{
    const response = await api.post(API_URL + "signin", {username, password});
    if(response.data.accessToken){
        localStorage.getItem("accessToken", JSON.stringify(response.data.accessToken));
        localStorage.setItem(
            "user",
            JSON.stringify(response.data)
        );
    }
    return response;
}

const AuthService = {
    register, login
};

export default AuthService;
