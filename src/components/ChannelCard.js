import React from "react";

const ChannelCard = ({ data }) => {
  console.log(data, "card");
  return (
    <div className="flex my-8 items-center px-4 py-4 border border-blue-400">
      <div className="flex items-center md:h-40 md:w-40 mx-4">
        <img
          className="rounded-full md:h-40 md:w-40"
          src={data.snippet.thumbnails.high.url}
          alt="Channel logo"
        />
      </div>
      <div className="flex flex-col ml-8">
        <div className="text-2xl font-medium">{data.snippet.channelTitle}</div>
        <div>{data.snippet.description}</div>
      </div>
    </div>
  );
};

export default ChannelCard;
