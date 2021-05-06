import React from "react";
import Svgeye from "../img/akar-icons_eye.svg";
import Svgcolck from "../img/clarity_alarm-clock-line.svg";

const Video = ({ thumbnails, title, id }) => {
  return (
    <>
      <div className="video-card" >
        <a href={`https://www.youtube.com/watch?v=${id}`} target="_blank" style = {{textDecoration : "none"}}>
          <div className="video">
            <img src={thumbnails} alt={title} />
          </div>
          <div className="video-titel">{title}</div>
          <div className="box-view-time">
            <div className="time">
              <img src={Svgcolck} alt="clock" />
              <p>00:19:44</p>
            </div>
            <div className="view">
              <img src={Svgeye} alt="clock" />
              <p>3000</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Video;
