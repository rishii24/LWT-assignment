import React, { useState } from "react";
import noFav from "../assets/notFav.png";
import VideoModal from "./VideoModal";

const VideoCard = ({ data }) => {
  const [modal, setModal] = useState(false);
  return (
    <div className="flex flex-col p-4 border border-blue-100 cursor-pointer" onClick={()=> setModal(!modal)}>
      <div className="">
        <img src={data.snippet.thumbnails.high.url} alt="thibnail" />
      </div>
      <div className="flex flex-col mt-8">
        <div className="flex justify-between text-sm my-2 font-medium">
          <div>{data.snippet.channelTitle}</div>{" "}
          <button>
            <img className="h-6" src={noFav} alt="fav" />
          </button>
        </div>
        <div className="text-lg font-medium h-24">{data.snippet.title}</div>
        <div className="text-sm mt-4">{data.snippet.description}</div>
      </div>

      {modal && <VideoModal data={data} />}
    </div>
  );
};

export default VideoCard;
