import React, { useState } from "react";

const Icons = ({
  imgMainSrc,
  imgCircle,
  titile,
  channelID,
  onclick,
  oncancle,
}) => {
  const [toggle, setToggle] = useState(false);

  const handlerClick = () => {
    setToggle(!toggle);
    !toggle ? onclick(channelID) : oncancle(channelID);
  };

  return (
    <div>
      <div
        className="icon-item"
        onClick={() => handlerClick()}
        data-line={titile}
      >
        <img className="main-icon" src={imgMainSrc} alt="beer" />
        <img
          className={toggle ? "circle-imge active" : "circle-imge unactive"}
          src={imgCircle}
          alt="ber"
        />
      </div>
    </div>
  );
};

export default Icons;
