import axios from "axios";
const baseURL = "http://localhost:5000";
const instance = axious.create({
    baseURL:baseURL,
    headers: {
        "Content-type": "application",
    },
});

export default instance;