import React from "react";
import Svgeye from "../img/akar-icons_eye.svg";
import Svgcolck from "../img/clarity_alarm-clock-line.svg";

const Mainpage = () => {
  return (
    <div className="Main">
      <div className="group-video">
        <div class="video-card">
          <div class="video">
            <img
              src="https://images.unsplash.com/photo-1580150083503-b69bbabc96c3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
              alt=""
            />
          </div>
          <div class="video-titel">
            【歌枠】最近暑い！夏！あつあつ夏歌枠☀【白銀ノエル/ホロライブ】
          </div>
          <div class="box-view-time">
            <div class="time">
              <img src={Svgcolck} alt="clock" />
              <p>00:19:44</p>
            </div>
            <div class="view">
              <img src={Svgeye} alt="clock" />
              <p>3000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
