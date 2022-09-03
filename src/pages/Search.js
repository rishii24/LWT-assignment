import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSearchThunk } from "../api/index";

import Navbar from "../components/Navbar";
import VideoList from "../components/VideoList";

const Search = () => {
  return (
    <div className="mb-8">
      <div>
        <Navbar />
      </div>
      <VideoList />
    </div>
  );
};

export default Search;
