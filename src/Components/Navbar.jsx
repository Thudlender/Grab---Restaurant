import React from "react";
import UserProfile from "./UserProfile";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";
import { useAuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user } = useAuthContext();
  
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost text-xl">
            Grab Restaurant
          </a>
        </div>
        <div className="flex-none">
          <div className="navbar-end">
            <a href="/Add" className="btn">
              ADD MENU
            </a>
          </div>

          

          {user ? (
            <UserProfile />
          ) : (
            <div className="flex space-x-2">
              <LoginButton />
              <RegisterButton />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
