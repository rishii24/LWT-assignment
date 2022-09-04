import React, { useState } from "react";
import noFav from "../assets/notFav.png";
import Fav from "../assets/fav.png";
import VideoModal from "./VideoModal";
import { useDispatch } from "react-redux";

import { userFavThunk } from "../api";

const VideoCard = ({ data }) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [fav, setFav] = useState(false);

  const handleFav = (data) => {
    setFav(!fav);
    dispatch(
      userFavThunk({
        data,
        isFav: true,
      })
    );
  };

  return (
    <div className="flex flex-col p-4 border border-blue-100">
      <div className="cursor-pointer" onClick={() => setModal(!modal)}>
        <img
          className="h-44 w-full"
          src={data.snippet.thumbnails.high.url}
          alt="thibnail"
        />
      </div>
      <div className="flex flex-col mt-8">
        <div className="flex justify-between text-sm my-2 font-medium">
          <div>{data.snippet.channelTitle}</div>{" "}
          <button onClick={() => handleFav(data)}>
            <img className="h-6" src={fav ? Fav : noFav} alt="fav" />
          </button>
        </div>
        <div className="text-lg font-medium h-24">{data.snippet.title}</div>
        <div className="text-sm mt-4">{data.snippet.description}</div>
      </div>

      {modal && <VideoModal data={data} setModal={setModal} />}
    </div>
  );
};

export default VideoCard;
