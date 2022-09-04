import React, { useState } from "react";
import FavVideoModal from "./FavVideoModal";
import { useDispatch } from "react-redux";
import { userUnfavThunk } from "../api";

const FavCard = ({ data }) => {

  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const handleUnfav = (data) => {
    dispatch(userUnfavThunk(data));
  };

  return (
    <div className="flex flex-col p-4 border border-blue-100 shadow-md">
      <div className="cursor-pointer" onClick={() => setModal(!modal)}>
        <img
          className="lg:h-44 md:h-36 h-32 w-full"
          src={data.data.snippet.thumbnails.high.url}
          alt="thibnail"
        />
      </div>
      <div className="flex flex-col mt-8">
        <div className="flex justify-between lg:text-sm md:text-xs my-2 font-medium">
          <div>{data.data.snippet.channelTitle}</div>{" "}
          <button onClick={() => handleUnfav(data)}>
            Remove
          </button>
        </div>
        <div className="lg:text-lg md:text-md font-medium h-24">
          {data.data.snippet.title}
        </div>
        <div className="text-sm mt-4">{data.data.snippet.description}</div>
      </div>

      {modal && <FavVideoModal data={data} setModal={setModal} />}
    </div>
  );
};

export default FavCard;
