import React from "react";

const Icons = ({ imgMainSrc, imgCircle }) => {
  return (
    <div>
      <div className="icon-item">
        <img className="main-icon" src={imgMainSrc} alt="beer" />
        <img className="circle-imge" src={imgCircle} alt="ber" />
      </div>
    </div>
  );
};

export default Icons;
