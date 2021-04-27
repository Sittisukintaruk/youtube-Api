import React from "react";
import Svgeye from "../img/akar-icons_eye.svg";
import Svgcolck from "../img/clarity_alarm-clock-line.svg";

const Video = () => {
  return (
    <>
      <div className="group-video">
        <div className="video-card">
          <div className="video">
            <img
              src="https://i.ytimg.com/vi/kXToGY7Bcw8/hqdefault_live.jpg"
              alt="ait"
            />
          </div>
          <div className="video-titel">
            【歌枠】最近暑い！夏！あつあつ夏歌枠☀【白銀ノエル/ホロライブ】
          </div>
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
        </div>
      </div>
    </>
  );
};

export default Video;
