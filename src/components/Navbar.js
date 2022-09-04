import React from "react";
import { NavLink } from "react-router-dom";
import Img from "../assets/youtube.webp";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="">
      <div className="shadow-md flex items-center justify-around px-4 py-4 text-xl">
        <div>
          <img className="h-12" src={Img} alt="logo" />
        </div>
        <div className="w-1/3">
          <SearchBar />
        </div>
        <div className=" w-1/4 flex lg:text-lg text-sm justify-around items-center">
          <NavLink className="mx-4 pb-1 hidden md:inline-block" to="/search">
            Home
          </NavLink>
          <NavLink className="mx-4 pb-1 hidden md:inline-block" to="/fav">
            Favourites
          </NavLink>
          {/* <NavLink className="mx-4 pb-1 hidden md:inline-block" to="/stats">
            Stats
          </NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
