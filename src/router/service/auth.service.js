import api from "./api";
import tokenService from "./token.service";

const API_URL = "/api/v1/auth";

const register = (username, email, password) =>{
    return await api.post (API_URL + "/signup", (username, email, password));
};