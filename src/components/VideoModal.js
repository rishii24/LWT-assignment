import React from "react";

const VideoModal = ({ data, setModal }) => {
  const videoSrc = `https://www.youtube.com/embed/${data.id.videoId}`;

  return (
    <div className="flex">
      <div className="flex flex-col justify-center items-center h-3/4 fixed left-16 md:left-28 lg:left-64 top-12 bg-black z-50 w-2/3">
        <button
          className="flex absolute top-0 right-0 px-2 py-1 bg-green-400 text-white text-xs"
          onClick={() => setModal(false)}
        >
          exit
        </button>
        <iframe
          height="380"
          width="750"
          src={videoSrc}
          allowFullScreen
          title="Video player"
        />
      </div>
      <div className="fixed h-screen w-full top-0 left-0 bg-black opacity-50"></div>
    </div>
  );
};

export default VideoModal;
