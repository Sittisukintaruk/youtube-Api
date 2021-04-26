import React, { useState } from "react";

const Icons = ({ imgMainSrc, imgCircle, titile }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className="icon-item" onClick={() => setToggle(!toggle)} data-line = {titile}>
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
