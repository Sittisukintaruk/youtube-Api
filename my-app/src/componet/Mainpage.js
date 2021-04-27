import React from "react";
import Video from "./Video";
import PropTypes from "prop-types";

const Mainpage = ({ videos }) => {
  const showVideo = () => {
    const data = videos.map((value,number) => (
      <Video
        key= {number}
        thumbnails= {value.video.thumbnails}
        title= {value.video.title}
        id= {value.video.id}
      />
    ));
    return data
  };

  return (
    <div className="Main">
      <div className="group-video">
      {showVideo()}
      </div>
    </div>
  );
};

Mainpage.prototype = {
  videos: PropTypes.array.isRequired,
};

export default Mainpage;
