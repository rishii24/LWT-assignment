import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import FavCard from "../components/FavCard";

const Favourites = () => {
  const favData = useSelector((state) => state.userFavs.data);
  const unfavData = useSelector((state) => state.userUnfavs.data);

  const [userFavData, setUserFavData] = useState([]);

  console.log(unfavData, "unfavData");
  useEffect(() => {
    setUserFavData(favData);
  }, [favData]);

  useEffect(() => {
    let temp = favData.filter((item) => item?.data?.etag !== unfavData);
    setUserFavData(temp);
  }, [unfavData]);

  console.log(userFavData, "userFav");
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col md:px-20 px-8 mt-10">
        <div className="text-2xl font-medium my-4">Favourite Videos</div>
        <div className="grid grid-rows-4 lg:grid-cols-4 md:grid-cols-3 grid-col-2 gap-4">
          {userFavData &&
            userFavData.map((data, index) => {
              return <FavCard data={data} />;
              // console.log(data,"map fav")
            })}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
