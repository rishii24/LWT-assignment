import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const VideoList = () => {
  const listData = useSelector((state) => state.userSearches.data);

  const [channelData, setChannelData] = useState("");
  useEffect(() => {
    setChannelData(listData?.items);
  }, [listData]);

  console.log(channelData, "video list");
  return (
    <div className="flex flex-col md:px-20 px-8">
      {channelData &&
        channelData.map((data, index) => {
          if (index === 0) return <ChannelCard data={data} />;
        })}
      <div className="grid grid-rows-4 grid-cols-4 gap-4">
        {channelData &&
          channelData.map((data, index) => {
            if (index !== 0) return <VideoCard data={data} />;
          })}
      </div>
    </div>
  );
};

export default VideoList;
