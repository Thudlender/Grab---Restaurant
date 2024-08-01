const getlocalAccessToken = () => {
    const user = getUser();
    return user.accessToken;
};

const setUser = () =>{
    localStorage.setItem("User", JSON.stringify(user))
};

const getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const removeUser = () =>{
    localStorage.removeItem("user");
};
const TokenService = {
    getlocalAccessToken,
    setUser,
    removeUser,
};

export default TokenService;

