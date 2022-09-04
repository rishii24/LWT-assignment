import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userSearchThunk } from "../api/index";

import Navbar from "../components/Navbar";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");

  const onChange = (e) => {
    setSearchInput(e.target.value);
  };

  const clickHandler = async (e) => {
    e.preventDefault();
    dispatch(userSearchThunk(searchInput));
  };

  return (
    <div className="w-full">
      <form onSubmit={clickHandler} className="flex mx-auto">
        {" "}
        <input
          onChange={onChange}
          className="flex-1 appearance-none border border-secondary-400 rounded md:rounded-sm w-full py-2 px-4 text-sm outline-none"
          type={"text"}
          value={searchInput}
          required={true}
          placeholder="Search here.."
        />
        <button
          onClick={clickHandler}
          className="flex items-center px-3 py-1 cursor-pointer bg-gray-500 w-max text-white text-sm"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
