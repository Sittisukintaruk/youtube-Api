import React, { useState } from "react";

const Icons = ({ imgMainSrc, imgCircle }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div
        className="icon-item"
        onClick={() => {
          setToggle(!toggle);
          console.log(toggle);
        }}
      >
        <img className="main-icon" src={imgMainSrc} alt="beer" />
        <img className="circle-imge" src={imgCircle} alt="ber" />
      </div>
    </div>
  );
};

export default Icons;
